var express = require('express')
var router = express.Router()
var axios = require('axios')

router.get('/', function(req1, res1, next) {

  var database = req1.query.db;
  if (database == 'mysql') {
    axios.get('http://localhost:3002/contato')
      .then(function (res2){
        console.log(res2)
        res1.json(res2.data)
      })
      .catch(function (error) {
        console.log(error)
      })
    
  } else if (database == 'mongodb') {
    axios.get('http://localhost:3003/contato')
      .then(function (res2){
        console.log(res2)
        res1.json(res2.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }


});

router.post('/', function (req1, res1) {
  var database = req1.query.db
  var portugues = req1.body.tradutor.portugues
  var ingles = req1.body.tradutor.ingles
  var espanhol = req1.body.tradutor.es
  if (database == 'mysql') {
  axios.post('http://localhost:3002/tradutor', {
        'tradutor' : {
          'PT' : portugues,
          'EN' : ingles,
          'ES' : espanhol
        }
      })
        .then(function (res2) {
          res1.location(res2.headers.location).status(201)
          res1.end()
        })
        .catch(function (error) {
          console.log(error)
        })
      } else if (database == 'mongodb') {

        axios.post('http://localhost:3003/tradutor', {
          'tradutor' : {
            'PT' : portugues,
            'EN' : ingles,
            'ES' : espanhol
          }
        })
          .then(function (res2) {
            res1.location(res2.headers.location).status(201)
            res1.end()
          })
          .catch(function (error) {
            console.log(error)
          })
          
    }   
})

router.put('/:id', function(req, res){
  var portugues = req.body.tradutor.portugues
  var ingles = req.body.tradutor.ingles
  var espanhol = req.body.tradutor.espanhol
})

router.delete('/:id', function(req, res) {
  var id = req.params.id;
})

module.exports = router;