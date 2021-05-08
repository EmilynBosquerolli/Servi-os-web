var express = require('express');
var router = express.Router();
var mysql = require('mysql2')

  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'swprova'
  });

router.get('/tradutor/pt/es/', function(req, res) {
  connection.execute('SELECT es FROM tradutor where pt = ?', [req.query.palavra], function (err, results) {
    return res.json({'tradutor': results})
  })
});

router.get('/tradutor/es/pt/', function(req, res) {
  connection.execute('SELECT pt FROM tradutor where es = ?', [req.query.palavra], function (err, results) {
    return res.json({'tradutor': results})
  })
});

router.post('/tradutor/pt/es/', function (req, res) {
  connection.execute('INSERT INTO tradutor VALUES (?,?)', [req.body.portugues],[req.body.espanhol], function (err,results) {
    console.log(req.body.portugues)
    res.location(`http://localhost:3002/tradutor/${results}`).status(201)
    res.send()
  })
})

router.post('/tradutor/es/pt/', function (req, res) {
  connection.execute('INSERT INTO tradutor VALUES (?,?)', [req.body.portugues],[req.body.espanhol], function (err,results) {
    res.location(`http://localhost:3002/tradutor/${results}`).status(201)
    res.send()
  })
})

router.put('/tradutor/pt/es/', function(req, res){
  connection.execute('UPDATE tradutor SEt pt = ?, es =? WHERE where pt = ?', [req.query.portugues],[req.query.espanhol],[req.query.palavra], function (err,results) {
    res.location(`http://localhost:3002/tradutor/${results}`).status(201)
    res.send()
  })
})

router.put('/tradutor/es/pt/', function(req, res){
  connection.execute('UPDATE tradutor SEt pt = ?, es =? WHERE where es = ?', [req.query.portugues],[req.query.espanhol],[req.query.palavra], function (err,results) {
    res.location(`http://localhost:3002/tradutor/${results}`).status(201)
    res.send()
  })
})

router.delete('/tradutor/es/', function(req, res) {
  connection.execute('DELETE FROM tradutor WHERE ES =', [req.query.palavra], function (results) {
    res.status(301)
  })
})

module.exports = router;