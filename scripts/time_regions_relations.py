import csv

import requests

user_input = input('Enter you SOCH API key:')

province_generator_url = 'http://www.kulturarvsdata.se/ksamsok/api?method=facet&index=provinceName&query=*&removeBelow=5000&x-api={0}'.format(user_input)

headers = {
    'Accept': 'json'
}

def get_province_time_counts_url(province):
    return 'http://www.kulturarvsdata.se/ksamsok/api?method=statisticSearch&index=fromTime=*&query=provinceName={0}%20AND%20(create_fromTime>=0%20OR%20produce_fromTime>=0%20OR%20use_fromTime>=0)%20OR%20(create_fromTime<=0%20OR%20produce_fromTime<=0%20OR%20use_fromTime<=0)&removeBelow=1&x-api={1}'.format(province, user_input)

with open('time_fct.csv', 'r') as f:
    time_fcts = list(csv.reader(f))

r = requests.get(province_generator_url, headers=headers)
raw = r.json()

raw_list_result = list()
# place/region id should be i + 1
for i, index in enumerate(raw['result']['term']):
    region = index['indexFields']['value']

    r2 = requests.get(get_province_time_counts_url(region), headers=headers)
    raw2 = r2.json()

    for fct in time_fcts:
        fct_count = 0
        # because statisticSearch can return duplicates (Jira:KSAM-172)
        values_checked = list()
        for count in raw2['result']['term']:
            value = count['indexFields']['value']
            if value in values_checked:
                continue
            values_checked.append(value)

            if '(create_fromTime>={0}%20OR%20produce_fromTime>={0}%20OR%20use_fromTime>={0})'.format(value) in fct[1]:
                fct_count += count['records']

        if fct_count > 0:
            raw_list_result.append([fct[0], region.title(), i + 1, fct_count])

with open('time_place.csv', 'w') as output:
    writer = csv.writer(output)
    for row in raw_list_result:
        writer.writerow(row)

print('DONE')
