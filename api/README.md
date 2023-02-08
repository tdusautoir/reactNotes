Initialise `db.json` :

```
{
  "notes": [
    {
      "id" : 1,
      "title": "Initiation à React",
      "content": "Lorem ipsum..."
    },
    {
      "id" : 2,
      "title": "Utilisation de json-server",
      "content": "Contenue..."
    }
  ],
  "profile": {
    "name": "Thibaut"
  }
}
```


Start the API JSON : 

```
npx json-server --watch db.json --port 4000
```