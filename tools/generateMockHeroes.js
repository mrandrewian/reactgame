/* eslint-disable no-console */
const jsf = require('json-schema-faker'),
fs = require('fs');

jsf.extend('faker', function() {
  return require('faker');
});

const schema = {
  "type": "object",
  "properties": {
    "heroes": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "unique": true,
            "minimum": 1
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName"
          },
          "class": {
            "enum": [
              "Warrior",
              "Mage",
              "Healer",
              "Ranger"
            ]
          },
          "power": {
            "type": "integer",
            "minimum": 1,
            "maximum": 20
          },
          "toughness": {
            "type": "integer",
            "minimum": 1,
            "maximum": 20
          }
        },
        "required": [
          "id",
          "firstName",
          "lastName",
          "class",
          "power",
          "toughness"
        ]
      }
    }
  },
  "required": [
    "heroes"
  ]
};

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/heroesDb.json", json, function (err) {
  if (err) {
    return console.log(err);
  } else {
    console.log("Mock data generated.", json);
  }
});
