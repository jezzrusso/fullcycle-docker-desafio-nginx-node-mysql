const express = require("express");
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "nodeapp",
  password: "nodeapp",
  database: "nodedb"
}
const mysql = require('mysql');



app.get("/", (req, res) => {
  const title = "<h1>Full Cycle</h1>";
  const instructions = "<h3>Para adicionar o usuario adicione no context path \"/user/{nome_do_usuario}\"</h3>";
  var peopleNames = "<ul>";
  const sql = 'SELECT * FROM people'
  const connection = mysql.createConnection(config);
  connection.query(sql, function(err, result, fields) {
    if(err) throw err;
    for(let i in result) {
    	peopleNames = peopleNames + `<li>${result[i].name}</li>`;
      
    }
    peopleNames = peopleNames + "</ul>";
      res.send(title + peopleNames + instructions);
  });
  
});

app.get("/user/:name", (req, res) => {
  var name = req.params['name'];
  const sql = `INSERT INTO people(name) values (\'${name}\')`;
  const connection = mysql.createConnection(config);
  connection.query(sql);
  connection.end();
  res.redirect('/');
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
