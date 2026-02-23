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
  var sql = "CREATE TABLE Student(Student_ID INT, Student_FirstName VARCHAR(255), Student_LastName VARCHAR(255), Student_City VARCHAR(255))";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created in DB");
  });
});
