## Generate database file

Use [NeDB](https://github.com/louischatriot/nedb) for now

### Convert csv to json

```
python3 product_csv_to_json.py
```

### Then generate database file from json

```
node product_json_to_nedb.js
```

The generated file will be available at ``__build__/database.db``
