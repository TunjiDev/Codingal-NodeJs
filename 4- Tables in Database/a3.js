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

  // Insert records into table which is already created in your database

  var sql = "INSERT INTO Students(Student_ID, Student_FirstName, Student_LastName, Student_City, Student_Grade)VALUES(1, 'Riya', 'Kumar', 'Bangalore', '5')";

  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Data inserted in DB");
  });
});
