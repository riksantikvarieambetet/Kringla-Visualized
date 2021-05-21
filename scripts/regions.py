import requests

province_url = 'https://www.kulturarvsdata.se/ksamsok/api?method=facet&index=provinceName&query=*&removeBelow=5000'

headers = {
    'Accept': 'json'
}

def get_types_url(province):
    return 'https://www.kulturarvsdata.se/ksamsok/api?method=facet&index=itemType&query=provinceName%3D{0}'.format(province)

def get_province_itemtypes(province, total):
    url = 'https://www.kulturarvsdata.se/ksamsok/api?method=facet&index=itemType&query=provinceName%3D{0}'.format(province)
    r = requests.get(url, headers=headers)
    raw = r.json()

    kulturl = None
    item = None
    foto = None
    bygg = None
    konst = None
    dok = None
    other = None

    for index in raw['result']['term']:
        if index['indexFields']['value'] == 'kulturlämning':
            kulturl = index['records']
        if index['indexFields']['value'] == 'objekt/föremål':
            item = index['records']
        if index['indexFields']['value'] == 'foto':
            foto = index['records']
        if index['indexFields']['value'] == 'byggnad':
            bygg = index['records']
        if index['indexFields']['value'] == 'konstverk':
            konst = index['records']
        if index['indexFields']['value'] == 'dokument':
            dok = index['records']

    other = total - sum([kulturl, item, foto, konst, bygg, dok])

    base_url = 'http://www.kringla.nu/kringla/sok?filter=provinceName%3D{0}&filter=itemType%3D'.format(province)
    result = ''

    if kulturl:
        result += '        {"legendLabel": "Kulturlämning", "magnitude": ' + str(kulturl) + ', "link": "' + base_url + 'kulturlämning"},\n'
    else:
        result += '        {"legendLabel": "Kulturlämning", "magnitude": 0, "link": "#"},\n'

    if item:
        result += '        {"legendLabel": "Föremål", "magnitude": ' + str(item) + ', "link": "' + base_url + 'objekt/föremål"},\n'
    else:
        result += '        {"legendLabel": "Föremål", "magnitude": 0, "link": "#"},\n'

    if foto:
        result += '        {"legendLabel": "Fotografi", "magnitude": ' + str(foto) + ', "link": "' + base_url + 'foto"},\n'
    else:
        result += '        {"legendLabel": "Fotografi", "magnitude": 0, "link": "#"},\n'

    if bygg:
        result += '        {"legendLabel": "Byggnad", "magnitude": ' + str(bygg) + ', "link": "' + base_url + 'byggnad"},\n'
    else:
        result += '        {"legendLabel": "Byggnad", "magnitude": 0, "link": "#"},\n'

    if konst:
        result += '        {"legendLabel": "Konstverk", "magnitude": ' + str(konst) + ', "link": "' + base_url + 'konstverk"},\n'
    else:
        result += '        {"legendLabel": "Konstverk", "magnitude": 0, "link": "#"},\n'

    if dok:
        result += '        {"legendLabel": "Dokument", "magnitude": ' + str(dok) + ', "link": "' + base_url + 'dokument"},\n'
    else:
        result += '        {"legendLabel": "Dokument", "magnitude": 0, "link": "#"},\n'

    if other:
        result += '        {"legendLabel": "Other", "magnitude": ' + str(other) + ', "link": "' + base_url + '"}\n'
    else:
        result += '        {"legendLabel": "Other", "magnitude": 0, "link": "#"}\n'

    return result

r = requests.get(province_url, headers=headers)
raw = r.json()

region_list = []
count_list = []
for i, index in enumerate(raw['result']['term']):
    region_list.append(index['indexFields']['value'].title())
    count_list.append(index['records'])
    # data-sets.js
    #print('{"name": "' + index['indexFields']['value'].title() + '", "value": ' + str(index['records']) + '},')
    # index.html
    #print('drawTownPie("' +  index['indexFields']['value'].title() + '", "#pie_chart_' + str(i+1) + '", 0);')
    # index.html
    #print('$(".' + index['indexFields']['value'].title() + '_max").toggleClass("' + index['indexFields']['value'].title() + '");')

    string = '''        <div class="{0}_max">
            <div class="pie-chart" id="pie_chart_{2}"></div>
            <div class="townName"><p class="name">{0}</p><p class="value">{1} entries</p></div>
        </div>'''.format(index['indexFields']['value'].title(), str(index['records']), str(i+1))

    # index.html
    #print(string)

    # data-sets.js
    #print('''    {0}: [\n{1}    ],'''.format(index['indexFields']['value'].title(), get_province_itemtypes(index['indexFields']['value'], index['records'])))

for i, region in enumerate(sorted(region_list)):
    # places.css
    #print('.' + region + ' { order: ' + str(i) + ' }')
    pass

# min/max value for index.html
print('max: ' + str(max(count_list)) + ' min: ' + str(min(count_list)))
