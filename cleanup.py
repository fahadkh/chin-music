import csv

'''
    This is basically ETL right?
    Please ignore this crude attempt at normalizing delimiters and filtering empty rows
'''

rows = []

def normalizeCell(input):
    return '; '.join(map(lambda s: s.strip().lower(), input.split(';')))

with open('albums.csv') as csvfile:
    readCsv = csv.reader(csvfile, delimiter=',')
    for row in readCsv:
        if (row[0] != ''):
            row[8] = normalizeCell(row[8])
            row[9] = normalizeCell(row[9].replace(',', ';'))
            row[10] = normalizeCell(row[10].replace(',', ';'))
            row[11] = normalizeCell(row[11])
            rows.append(row)

with open('cleanedAlbums.csv', mode='w') as cleanCsv:
    writeCsv = csv.writer(cleanCsv, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

    for row in rows:
        writeCsv.writerow(row)


