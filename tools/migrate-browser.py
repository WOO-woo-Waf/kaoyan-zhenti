"""Read only the Kaoyan allowlisted localStorage keys; never modify browser profiles.

One-time migration helper. Requires dfindexeddb in _tmp/browser-reader (not a runtime dependency).
Writes only selected study data into _tmp/browser-migration-candidates.json for review/import.
"""
import contextlib
import json
import os
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / '_tmp/browser-reader'))
from dfindexeddb.leveldb.record import FolderReader

KEYS = set('cs408.wrong.v1 cs408.done.v1 cs408.pref.v1 math.wrong.v1 math.done.v1 math.pref.v1 wx.answers.v1 wx.bookmarks.v1 wx.theme.v1 wx.fontSize.v1 wx.showZh.v1 wx.mode.v1 paper.answers paper.words paper.theme paper.size paper.zh paper.view paper.deep paper.analysis paper.year paper.tab paper.textNo hub.theme.v1 study.questions.v1 study.knowledge.v1'.split())

def decode(raw):
    if not raw:
        return ''
    if raw[0] == 0:
        return raw[1:].decode('utf-16-le')
    if raw[0] == 1:
        return raw[1:].decode('latin-1')
    raise ValueError('Unknown Chromium string encoding')

def extract(directory):
    latest = {}
    errors = []
    try:
        for entry in FolderReader(directory).GetRecords(use_manifest=True):
            rec = entry.record
            rawkey = rec.key
            if not rawkey.startswith(b'_') or b'\x00' not in rawkey:
                continue
            origin, payload = rawkey[1:].split(b'\x00', 1)
            try:
                key = decode(payload)
            except (ValueError, UnicodeError):
                continue
            if key not in KEYS:
                continue
            origin = origin.decode('utf-8')
            if not (origin.startswith('file://') or origin.startswith('http://127.0.0.1') or origin.startswith('http://localhost')):
                continue
            if entry.recovered:
                continue
            pair = (origin, key)
            if pair not in latest or rec.sequence_number > latest[pair].sequence_number:
                latest[pair] = rec
    except Exception as error:
        errors.append(type(error).__name__ + ': ' + str(error)[:120])
    origins = {}
    for (origin, key), record in latest.items():
        # Value 0 is a deletion marker. Never resurrect deleted browser entries.
        if int(record.record_type) == 0:
            continue
        try:
            text = decode(record.value)
            try:
                value = json.loads(text)
            except ValueError:
                if key == 'hub.theme.v1' and text in ('dark', 'light'):
                    value = text
                else:
                    raise
        except (ValueError, UnicodeError):
            errors.append('Unsupported value for allowlisted key ' + key)
            continue
        origins.setdefault(origin, {})[key] = value
    return origins, errors

def main():
    roots = [('Edge',pathlib.Path(os.environ['LOCALAPPDATA'])/'Microsoft/Edge/User Data'),
             ('Chrome',pathlib.Path(os.environ['LOCALAPPDATA'])/'Google/Chrome/User Data')]
    candidates = []
    log = ROOT/'_tmp/migration-parser.log'
    with log.open('w',encoding='utf-8') as debug, contextlib.redirect_stderr(debug):
        for browser, root in roots:
            if not root.exists():
                continue
            for profile in root.iterdir():
                directory = profile/'Local Storage/leveldb'
                if not (profile.name == 'Default' or profile.name.startswith('Profile ')) or not directory.exists():
                    continue
                origins, errors = extract(directory)
                for origin, values in origins.items():
                    candidates.append({'browser':browser,'profile':profile.name,'origin':origin,'values':values,'errors':errors})
    out = ROOT/'_tmp/browser-migration-candidates.json'
    out.write_text(json.dumps(candidates,ensure_ascii=False,indent=2),encoding='utf-8')
    for c in candidates:
        print(json.dumps({'browser':c['browser'],'profile':c['profile'],'origin':c['origin'],
            'records':{key:len(value) if isinstance(value,(dict,list)) else 'preference' for key,value in c['values'].items()},'errors':c['errors']},ensure_ascii=False))
    print('Selected study-data candidates:', len(candidates))

if __name__ == '__main__':
    main()
