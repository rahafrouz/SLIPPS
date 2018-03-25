import json
import datetime;
now = datetime.datetime.now()

# en keywords
# jsond = json.load(open('../lert_output/en_basic.json'))
file = open("kw_output.json", "w")
i = 1
# for data in jsond:
while i < 44:
	file.write("{\n")
	file.write('"model": "apiserver.keyword",')
	file.write('\n')
	file.write('"fields": {' + '\n')
	file.write('"pk": ' + str(i + 43) + ',' + '\n'),
	file.write('"language": "fi",' + '\n')
	file.write('"category": "basic",' + '\n')
	file.write('"kw_id": ' + str(i) + ',' + '\n')
	file.write('"content": "",' + '\n')
	file.write('"created_at": ' + '"' + str(now) + '"')
	file.write("}\n")
	file.write("},\n")
	i = i+1
file.close() 

