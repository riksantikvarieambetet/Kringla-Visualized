import csv

import requests

user_input = input('Enter you SOCH API key:')
core_url = 'http://www.kulturarvsdata.se/ksamsok/api?method=statisticSearch&index=fromTime=*&query=(create_fromTime>=0%20OR%20produce_fromTime>=0%20OR%20use_fromTime>=0)%20OR%20(create_fromTime<=0%20OR%20produce_fromTime<=0%20OR%20use_fromTime<=0)&x-api={0}'.format(user_input)

headers = {
    'Accept': 'json'
}

r = requests.get(core_url, headers=headers)
raw = r.json()

list_of_values = set()
for item in raw['result']['term']:
    list_of_values.add(item['indexFields']['value'])

list_of_values = sorted(list_of_values, key=int)

time_fcts = []
with open('basis_data/time_fct.csv') as csvfile:
    time_fcts = list(csv.reader(csvfile))

for i, fct in enumerate(time_fcts):
    print('fct:' + fct[0])
    fct_filter = ''
    for value in list_of_values:
        try:
            if int(fct[0]) <= value <= int(time_fcts[i+1][0]) and value != int(time_fcts[i+1][0]):
                fct_filter += '&fromTime%3D' + str(value)
        except:
            if int(fct[0]) <= value:
                fct_filter += '&fromTime%3D' + str(value)
    fct.insert(0, fct_filter)
    fct.insert(0, i)

with open('time_fct.csv', 'w')as output:
    writer = csv.writer(output)
    for row in time_fcts:
        writer.writerow(row)

print('DONE')