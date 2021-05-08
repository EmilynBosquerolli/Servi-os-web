var express = require('express');
var router = express.Router();

//conexão com mongo
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.nlkp7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("tradutor").collection("tradutor");
  // perform actions on the collection object
  client.close();
});

router.get('/pt/en/?palavra=', function(req, res) {
  var portugues = req.body.tradutor.portugues
  Tradutor.find(portugues).exec(function(error, docs){
      res.json({'tradutor': docs}).end()
  });
});

router.get('/en/pt/:palavra', function(req, res) {
  var ingles = req.body.tradutor.ingles
  Tradutor.find(ingles).exec(function(error, docs){
    res.json({'tradutor': docs}).end()
  });
})

router.post('/pt/en/', function (req, res) {
  var portugues = req.body.tradutor.portugues
  var ingles = req.body.tradutor.ingles
  var newTrad = new Tradutor({ 'portugues': portugues, 'ingles': ingles })
  newTrad.save(function (error) {
    if (error) {
        res.status(500).json({ error: error.message })
    }
    res.status(201).location(`http://localhost:3003/tradutor/mongodb/${newTrad.id}`).end()
  });
})

router.post('/en/pt', function (req, res) {
  var portugues = req.body.tradutor.portugues
  var ingles = req.body.tradutor.ingles
  var newTrad = new Tradutor({ 'portugues': portugues, 'ingles': ingles })
  newTrad.save(function (error) {
    if (error) {
        res.status(500).json({ error: error.message })
    }
    res.status(201).location(`http://localhost:3003/tradutor/mongodb/${newTrad.id}`).end()
  });
})

router.put('/pt/en/', function(req, res){
  var portugues = req.body.tradutor.portugues
  var ingles = req.body.tradutor.ingles
  Tradutor.updateOne({ '_id': id }, { 'portugues': portugues, 'ingles': ingles }, function (error, doc) {
    if (error) {
        res.status(500).json({ error: error.message });
    }
    res.status(304).location(`http://localhost:3003/tradutor/mongodb/${id}`).end()
  });
})

router.put('/en/pt', function(req, res){
  var portugues = req.body.tradutor.portugues
  var ingles = req.body.tradutor.ingles
  Tradutor.updateOne({ '_id': id }, { 'portugues': portugues, 'ingles': ingles }, function (error, doc) {
    if (error) {
        res.status(500).json({ error: error.message });
    }
    res.status(304).location(`http://localhost:3003/tradutor/mongodb/${id}`).end()
  });
})

router.delete('/en/', function(req, res, next) {
  var ingles = req.body.tradutor.ingles
  Tradutor.find({ 'ingles': ingles }).remove(function (error) {
    if (error) {
        res.status(500).json({ error: error.message }).end();
    }
    res.json({success: true}).end();
  });
})

module.exports = router;