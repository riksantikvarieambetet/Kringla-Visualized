import csv

import requests

headers = {
    'Accept': 'json'
}

def get_keyword_time_counts_url(keyword):
    return 'https://www.kulturarvsdata.se/ksamsok/api?method=statisticSearch&index=fromTime=*&query=itemKeyWord="{0}"%20AND%20(create_fromTime>=0%20OR%20produce_fromTime>=0%20OR%20use_fromTime>=0)%20OR%20(create_fromTime<=0%20OR%20produce_fromTime<=0%20OR%20use_fromTime<=0)&removeBelow=1'.format(keyword)

with open('time_fct.csv', 'r') as f:
    time_fcts = list(csv.reader(f))

with open('datatags.csv', 'r') as f:
    list_of_keywords = list(csv.reader(f))

raw_list_result = list()
list_of_checked_keywords = list()
for index in list_of_keywords:
    keyword = index[3]
    if keyword in list_of_checked_keywords:
        continue
    list_of_checked_keywords.append(keyword)
    print(keyword)

    r2 = requests.get(get_keyword_time_counts_url(keyword), headers=headers)
    raw2 = r2.json()

    for fct in time_fcts:
        fct_count = 0
        # because statisticSearch can return duplicates (Jira:KSAM-172)
        values_checked = list()
        if raw2['result']['numberOfTerms'] < 1:
            continue
        # hack to sloce issue with JSON type (Jira:KSAM-173)
        elif raw2['result']['numberOfTerms'] < 2:
            data = [raw2['result']['term']]
        else:
            data = raw2['result']['term']

        for count in data:
            value = count['indexFields']['value']
            if value in values_checked:
                continue
            values_checked.append(value)

            if '(create_fromTime>={0}%20OR%20produce_fromTime>={0}%20OR%20use_fromTime>={0})'.format(value) in fct[1]:
                fct_count += count['records']

        if fct_count > 0:
            raw_list_result.append([fct[0], keyword, index[0], fct_count])

with open('time_keyword.csv', 'w') as output:
    writer = csv.writer(output)
    for row in raw_list_result:
        writer.writerow(row)

print('DONE')
