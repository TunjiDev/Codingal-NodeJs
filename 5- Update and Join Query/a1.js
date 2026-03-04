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
  // enter the table name which is already existing
  var sql = "UPDATE students SET Student_City='Mumbai' WHERE Student_ID = 1";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Data Updated in Table");
  });
});
