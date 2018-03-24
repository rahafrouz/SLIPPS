import json
from pprint import pprint
import datetime;
now = datetime.datetime.now()

jsond = json.load(open('../lert_output/data_countries.json'))
file = open("fix_output.json", "w")
i = 1
for data in jsond:
	file.write("{\n")
	file.write('"model": "apiserver.country",')
	file.write('\n')
	file.write('"pk": ' + str(i) + ',' + '\n'),
	file.write('"fields": {' + '\n')
	file.write('"code": ' + '"' + data["Code"] + '",' + '\n')
	file.write('"name": ' + '"' + data["Name"].encode("utf-8") + '",' + '\n')
	file.write('"created_at": ' + '"' + str(now) + '"')
	file.write("}\n")
	file.write("},\n")
	i = i+1
file.close() 

