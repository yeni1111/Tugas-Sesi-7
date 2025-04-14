const contoh = {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "job": {
        "type": "string"
      },
      "id": {
        "type": "string"
      },
      "createdAt": {
        "type": "string"
      }
    },
    "required": [
      "name",
      "job",
      "id",
      "createdAt"
    ]
  }
  
  pm.test("json schema harus bener", function() {
      pm.response.to.have.jsonSchema(contoh)
  })
  
  pm.test("HTTP Status code harus bener", function(){
      pm.response.to.have.status(201)
  })