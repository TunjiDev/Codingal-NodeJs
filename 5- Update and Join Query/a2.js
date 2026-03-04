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
  var sql = "DELETE FROM students WHERE Student_ID = 1";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Data Deleted From Table DB");
  });
});
