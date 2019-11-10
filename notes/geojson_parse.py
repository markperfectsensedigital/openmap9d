#!/usr/bin/python3.6

import json

with open ('/home/abba/maryland-politics/NineDistrictsForMoCo/streets_orig.json', 'r') as f:
	hugefile = json.load(f)

parsed = json.dumps(hugefile, indent=2)

outfile = open("/tmp/hugefile_parsed.json", "w")
outfile.write(parsed)
outfile.close()

print ("All done")
