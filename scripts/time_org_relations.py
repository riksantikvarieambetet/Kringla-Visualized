import csv

import requests

user_input = input('Enter you SOCH API key:')

headers = {
    'Accept': 'json'
}

org_generator_url = 'http://www.kulturarvsdata.se/ksamsok/api?method=getServiceOrganization&value=all&x-api={0}'.format(user_input)

def get_org_time_counts_url(org):
    return 'http://www.kulturarvsdata.se/ksamsok/api?method=statisticSearch&index=fromTime=*&query=serviceOrganization="{0}"&removeBelow=1&x-api={1}'.format(org, user_input)

with open('time_fct.csv', 'r') as f:
    time_fcts = list(csv.reader(f))

r = requests.get(org_generator_url, headers=headers)
raw = r.json()

raw_list_result = list()
for index in raw['result']['institution']:
    org_full = index['namnswe']
    org_short = index['kortnamn']
    print(org_full)

    r2 = requests.get(get_org_time_counts_url(org_short), headers=headers)
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
            if '&fromTime%3D' + str(value) in fct[1]:
                fct_count += count['records']

        if fct_count > 0:
            raw_list_result.append([fct[0], org_full, org_short, fct_count])

with open('time_org.csv', 'w') as output:
    writer = csv.writer(output)
    for row in raw_list_result:
        writer.writerow(row)

print('DONE')
