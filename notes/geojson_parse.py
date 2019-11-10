#!/usr/bin/python3.6

import json

with open ('/tmp/b8d9596beab2428885a051d59d86f80e_0.geojson', 'r') as f:
	hugefile = json.load(f)

parsed = json.dumps(hugefile, indent=2)

outfile = open("/tmp/hugefile_parsed.json", "w")
outfile.write(parsed)
outfile.close()

print ("All done")
