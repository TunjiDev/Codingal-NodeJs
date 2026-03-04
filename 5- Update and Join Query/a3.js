var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "eldirecto00",
  database: "TestDirecto",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  const query = `
    SELECT 
      Students.Student_FirstName,
      Students.Student_LastName,
      Subjects.Subject_Name,
      Subjects.Marks
    FROM Students
    INNER JOIN Subjects
    ON Students.Student_ID = Subjects.Student_ID
  `;

  connection.query(query, function (err, result, fields) {
    if (err) throw err;

    console.log("JOIN Result:");
    console.log(result);

    connection.end();
  });
});
