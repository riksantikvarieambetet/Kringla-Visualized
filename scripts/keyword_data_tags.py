import math
import requests

class Keyword:
    def __init__(self, _id, _value, _count):
        self.id = _id
        self.value = _value
        self.count = _count
        self.records = []

class KeywordRelation:
    def __init__(self, _id1, _id2, _count, _value):
        self.id1 = _id1
        self.id2 = _id2
        self.value = _value
        self.count = _count

def uri_from_keyword_generator(word):
    url = 'http://www.kulturarvsdata.se/ksamsok/api?method=search&query=itemKeyWord={0}&x-api={1}&hitsPerPage=500&recordSchema=xml&fields=itemId&startRecord='.format(word.value, user_input)
    required_n_requests = math.ceil(word.count / 500)

    count = 0
    while required_n_requests > count:
        start_record = count * 500
        r = requests.get(url + str(start_record), headers=headers)
        raw = r.json()
        for item in raw['result']['records']['record']:
            yield item['field']['content']

user_input = input('Enter you SOCH API key:')

core_url = 'http://www.kulturarvsdata.se/ksamsok/api?method=statistic&index=itemKeyWord=*&x-api={0}'.format(user_input)

headers = {
    'Accept': 'json'
}

print('fetching keywords')
r = requests.get(core_url, headers=headers)
raw = r.json()

print('processing keywords')
keyword_list = []
for i, word in enumerate(raw['result']['term']):
    keyword_list.append(Keyword(i+1, word['indexFields']['value'], word['records']))
    if i+1 == 500:
        break

for word in keyword_list:
    print('fetching uris for keyword: {0}'.format(word.value))
    for uri in uri_from_keyword_generator(word):
        word.records.append(uri)

print('done fetching data')
print('calculating relations')

list_keyword_relations = []

for word in keyword_list:
    pass
    #TODO