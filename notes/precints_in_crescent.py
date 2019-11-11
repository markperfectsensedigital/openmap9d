#!/usr/bin/python3.6
import json
import sys


def inside_bounding_box(properties):
    print(properties['OBJECTID'])
    bounding_box = {'lower_left':{'lon': -77.21406167229496, 'lat': 38.934216906802604},
    'upper_right':{'lon': -76.9717598108188, 'lat': 39.07182682073789}}
    
    if ((properties['x_lat'] is None) or (properties['y_lat'] is None)):
        return False

    return ((properties['x_lat'] > bounding_box['lower_left']['lon']) and 
        (properties['x_lat'] < bounding_box['upper_right']['lon']) and 
        (properties['y_lat'] > bounding_box['lower_left']['lat']) and
        (properties['y_lat'] < bounding_box['upper_right']['lat']))


print ("Searching for precincts inside bounding box")

with open ('/home/abba/maryland-politics/NineDistrictsForMoCo/openmap9d/notes/election_precincts.geojson', 'r') as f:
	hugefile = json.load(f)

features = hugefile['features']

outfile = open("/home/abba/maryland-politics/NineDistrictsForMoCo/openmap9d/notes/precincts_in_bounding_box.csv", "w")
outfile.write("Precinct\tCouncil District\tLon\tLat\n")

for feature in features:
    if (inside_bounding_box(feature['properties'])):
        outfile.write("%s\t%s\t%s\t%s\n" %(feature['properties']['PRECINCT_'],
            feature['properties']['COUNCIL'],
            feature['properties']['x_lat'],
            feature['properties']['y_lat']))

outfile.close()

print ("All done. Results in precincts_in_bounding_box.csv")
