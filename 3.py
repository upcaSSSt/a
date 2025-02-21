from os import makedirs
from datetime import datetime
from glob import glob
from pathlib import Path

d = str(datetime.now())[:16]
print(d.replace('-', '_').replace(':', '_').replace(' ', '_'))

paths = [Path(path) for path in glob('*.*')]
print(paths[0].suffix)

os.makedirs(newpath)

p = paths[0].mkdir(parents=True, exist_ok=True)
paths[0].rename(f'{p.suffix}/{p.name}')
