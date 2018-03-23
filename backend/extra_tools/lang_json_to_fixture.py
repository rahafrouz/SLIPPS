import json
from pprint import pprint

jsond = json.load(open('lert_output/language_3b2.json'))
file = open("lang_output.json", "w")
i = 1
for data in jsond:
	file.write("{\n")
	file.write('"model": "apiserver.language",')
	file.write('\n')
	file.write('"pk": ' + str(i) + ',' + '\n'),
	file.write('"fields": {' + '\n')
	file.write('"code_2": ' + '"' + data["alpha2"] + '",' + '\n')
	file.write('"code_3": ' + '"' + data["alpha3-b"] + '",' + '\n')
	file.write('"name": ' + '"' + data["English"].encode("utf-8") + '"')
	file.write("}\n")
	file.write("},\n")
	i = i+1
file.close() 

