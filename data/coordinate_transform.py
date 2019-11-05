#from pyproj import Proj, transform
import pyproj

wgs84=pyproj.Proj("+init=EPSG:4326") # 

isn2004=pyproj.Proj("+proj=lcc +lat_1=38.3 +lat_2=39.45 +lat_0=37.66666666666666 +lon_0=-77 +x_0=399999.9999999999 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs")

x, y = isn2004(1258455.010582735529169, 473828.448958728462458)
print (x,y)
x1, y1 = pyproj.transform(isn2004,wgs84,1258455.010582735529169, 473828.448958728462458)
print (x1,y1)


