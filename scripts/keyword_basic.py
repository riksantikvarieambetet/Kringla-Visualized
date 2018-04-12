import csv

with open('datatags.csv') as csvfile:
    spamreader = csv.reader(csvfile)
    for row in spamreader:
        if row[0] == row[1]:
            print('{"id":' + row[0] + ',"value":' + row[2] + ',"name":"' + row[3] + '"},')
