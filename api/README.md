Initialise `db.json` :

```
{
  "notes": [
    {
      "title": "Initiation à React",
      "content": "Contenuueeeee",
      "id": 1,
      "pinned": false,
      "tagsId": [
        1
      ]
    },
    {
      "title": "Initiation à React 2",
      "content": "Contenuueeee 2",
      "id": 2,
      "pinned": true,
      "tagsId": []
    }
  ],
   "profile": {
    "name": "Thibaut"
  },
  "tags": [
    {
      "name": "premier tag",
      "id": 1
    },
    {
      "name": "deuxieme tag",
      "id": 2
    }
  ]
}
```


Start the API JSON : 

```
npx json-server --watch db.json --port 4000
```