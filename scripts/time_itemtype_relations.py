import csv

import requests

user_input = input('Enter you SOCH API key:')

headers = {
    'Accept': 'json'
}

def get_itemtype_time_counts_url(itemtype):
    return 'http://www.kulturarvsdata.se/ksamsok/api?method=statisticSearch&index=fromTime=*&query=itemType="{0}"%20AND%20(create_fromTime>=0%20OR%20produce_fromTime>=0%20OR%20use_fromTime>=0)%20OR%20(create_fromTime<=0%20OR%20produce_fromTime<=0%20OR%20use_fromTime<=0)&removeBelow=1&x-api={1}'.format(itemtype, user_input)

with open('time_fct.csv', 'r') as f:
    time_fcts = list(csv.reader(f))

with open('basis_data/itemtype_fct.csv', 'r') as f:
    list_of_itemtypes = list(csv.reader(f))

raw_list_result = list()
for index in list_of_itemtypes:
    itemtype = index[1]
    print(itemtype)

    r2 = requests.get(get_itemtype_time_counts_url(itemtype), headers=headers)
    raw2 = r2.json()

    for fct in time_fcts:
        fct_count = 0
        # because statisticSearch can return duplicates (Jira:KSAM-172)
        values_checked = list()
        if raw2['result']['numberOfTerms'] < 1:
            continue
        # hack to solve issue with JSON type (Jira:KSAM-173)
        elif raw2['result']['numberOfTerms'] < 2:
            data = [raw2['result']['term']]
        else:
            data = raw2['result']['term']

        for count in data:
            value = count['indexFields']['value']
            if value in values_checked:
                continue
            values_checked.append(value)
            if '&fromTime%3D' + str(value) in fct[1]:
                fct_count += count['records']

        if fct_count > 0:
            raw_list_result.append([index[0], fct[0], fct_count])

# calculate "other" type
print('Calculating others, this might take a while...')
other_generator_url = 'http://www.kulturarvsdata.se/ksamsok/api?method=facet&index=itemType&query=*&removeBelow=1&x-api={0}'.format(user_input)
r = requests.get(other_generator_url, headers=headers)
raw = r.json()

list_of_item_type_values = list()
for item in list_of_itemtypes:
    list_of_item_type_values.append(item[1])

for fct in time_fcts:
    fct_count = 0
    if not fct[1]:
        continue

    for item in raw['result']['term']:
        if item['indexFields']['value'] in list_of_item_type_values:
            continue

        # # crashes the request and all itemtypes with it are wrong and shitty
        if '#' in item['indexFields']['value']:
            continue

        r3 = requests.get(get_itemtype_time_counts_url(item['indexFields']['value']), headers=headers)
        raw3 = r3.json()

        if raw3['result']['numberOfTerms'] < 1:
            continue
        elif raw3['result']['numberOfTerms'] < 2:
            data = [raw['result']['term']]
        else:
            data = raw3['result']['term']

        values_checked = list()
        for count2 in data:
            value = count2['indexFields']['value']
            if value in values_checked:
                continue
            values_checked.append(value)

            if '&fromTime%3D' + str(value) in fct[1]:
                fct_count += count['records']
    
    if fct_count > 0:
        raw_list_result.append([7, fct[0], fct_count])


with open('time_itemtype.csv', 'w') as output:
    writer = csv.writer(output)
    for row in raw_list_result:
        writer.writerow(row)

print('DONE')
