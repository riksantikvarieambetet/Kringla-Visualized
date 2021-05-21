import csv
import requests

headers = {
    'Accept': 'json'
}

times = []
with open('time_fct.csv') as csvfile:
    times = list(csv.reader(csvfile))

itemtypes = []
with open('basis_data/itemtype_fct.csv') as csvfile:
    itemtypes = list(csv.reader(csvfile))

mediatypes = []
with open('basis_data/mediatypes.csv') as csvfile:
    mediatypes = list(csv.reader(csvfile))

for itemtype in itemtypes:
    if itemtype[1] is '':
        continue

    for time in times:
        if time[1] == '':
            continue

        known_mediatype_count = 0

        for mediatype in mediatypes:
            print(time)
            print(mediatype[1])
            print(mediatype)

        r = requests.get(''.format(), headers=headers)
        raw = r.json()

#TODO other media types
