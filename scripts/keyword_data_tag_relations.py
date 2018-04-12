import csv
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
    url = 'http://www.kulturarvsdata.se/ksamsok/api?method=search&query=itemKeyWord="{0}"&x-api={1}&hitsPerPage=500&recordSchema=xml&fields=itemId&startRecord='.format(word.value, user_input)
    required_n_requests = math.ceil(word.count / 500)

    count = 0
    while required_n_requests > count:
        start_record = count * 500
        count += 1
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

csv_file = open('datatags.csv', 'w')
spamwriter = csv.writer(csv_file)

for word in keyword_list:
    for word2 in keyword_list:
        if word.value == word2.value:
            print(word.id, word2.id, len(word.records), word2.value)
            spamwriter.writerow([word.id, word2.id, len(word.records), word2.value])
        else:
            count_shared_records = 0
            for record in word.records:
                if record in word2.records:
                    count_shared_records += 1
            if count_shared_records is not 0:
                print(word.id, word2.id, count_shared_records, word2.value)
                spamwriter.writerow([word.id, word2.id, count_shared_records, word2.value])

csv_file.close()
print('DONE')
