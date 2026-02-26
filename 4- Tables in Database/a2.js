var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "eldirecto00",
  database: "TestDirecto",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
  // Give any table which is already existing
  var sql = "ALTER TABLE Students ADD Student_Grade INT";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table Altered DB");
  });
});
