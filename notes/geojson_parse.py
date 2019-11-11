#!/usr/bin/python3.6

import json
import sys
import os

new_filename = os.path.abspath(sys.argv[1]) + "_parsed.json"

with open (sys.argv[1], 'r') as f:
	hugefile = json.load(f)

parsed = json.dumps(hugefile, indent=2)

outfile = open(new_filename, "w")
outfile.write(parsed)
outfile.close()

print ("All done. Parsed file in " + new_filename)
