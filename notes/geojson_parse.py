import json

with open ('/tmp/barf.geojson', 'r') as f:
	hugefile = json.load(f)

parsed = json.dumps(hugefile, indent=2)

outfile = open("/tmp/hugefile_parsed.json", "w")
outfile.write(parsed)
outfile.close()

print ("All done")