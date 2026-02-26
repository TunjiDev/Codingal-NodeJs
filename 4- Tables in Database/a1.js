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
  // Give the name of the table which is existing.
  var sql = "DROP TABLE Student";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table Dropped DB");
  });
});
