import sys
import os
import csv
import json
import base64
from collections import defaultdict
from pprint import pprint

csv.field_size_limit(sys.maxsize)

imgDirectory = '__build__/img'
if not os.path.exists(imgDirectory):
    os.makedirs(imgDirectory)

with open('sample_csv/sample-product-with-image.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    products = []
    for row in reader:
        productDict = defaultdict()
        productDict['name'] = row['name']
        productDict['description'] = row['description']
        productDict['price'] = row['list_price']
        productDict['category'] = row['public_categ_ids/id'].split('.')[-1]

        # generate image file
        if row['image']:
            productName = '_'.join(row['name'].lower().split())
            imageFileName = '{}.png'.format(productName)

            imageData = base64.b64decode(row['image'])
            with open('__build__/img/' + imageFileName, "wb") as imageFile:
                imageFile.write(imageData)

            productDict['image'] = imageFileName

        products += [productDict]

with open('__build__/products.json', 'w') as outFile:
    json.dump(products, outFile)
