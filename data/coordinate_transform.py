#from pyproj import Proj, transform
import pyproj
import re

wgs84=pyproj.Proj("+init=EPSG:4326") # 

isn2004=pyproj.Proj("+proj=lcc +lat_1=38.3 +lat_2=39.45 +lat_0=37.66666666666666 +lon_0=-77 +x_0=399999.9999999999 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs")

f = open('mocobndy.txt', 'r')
#with open('mocobndy.txt') as f:
new_coords = []
original_coord = f.readline()
while original_coord:
	#print (original_coord.rstrip())
	bare_coords = re.split(", *",original_coord.rstrip())
	#print (bare_coords)
	newx, newy = pyproj.transform(isn2004,wgs84,float(bare_coords[0]),float(bare_coords[1]))
	#print ('[', newx, ', ', newy, ']')
	new_coords.append('[' + str(newx) + ', ' + str(newy) + ']')
	original_coord = f.readline()

f.close()

separator=', '
hugecoords = separator.join(new_coords)
#print(hugecoords)
f = open("new_coordinates.txt", "w")
f.write("[ [ ")
f.write(hugecoords)
f.write(" ] ]")
f.close()

#x = f.readlines()

#print(x)
#original_points = re.split("\], \[",x[0])
#number_coords = len(original_points)
#for coord in original_points:
#	print (coord)

#print (original_points)
#print (original_points[0])
#print (original_points[number_coords - 1])

#x, y = isn2004(1258455.010582735529169, 473828.448958728462458)
#print (x,y)
#x1, y1 = pyproj.transform(isn2004,wgs84,1258455.010582735529169, 473828.448958728462458)
#print (x1,y1)


