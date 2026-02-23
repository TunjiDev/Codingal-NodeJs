var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost", // Give your host name
  user: "root", // Give your username
  password: "eldirecto00", // Give your password
  //   database: "TestDirecto", // Giver your DB name
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
  //   var sql = "CREATE TABLE Student(Student_ID INT, Student_FirstName VARCHAR(255), Student_LastName VARCHAR(255), Student_City VARCHAR(255))";
  //   connection.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log("Table created in DB");
  //   });
});
