const express = require('express')
const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'abc123#_',
  database: 'nodedb'
};

app.get('/', (req, res) => {
  const mysql = require('mysql')
  const connection = mysql.createConnection(config)
  
  const createTable = `CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL);`
  connection.query(createTable);
  
  const name = getRandomName();

  const sql = `INSERT INTO people(name) VALUES('${name}')`

  connection.query(sql)

  let names = '<h2>Names</h2><br/>';

  const people = `SELECT name FROM people`;
  connection.query(people, (error, results, fields) => {
    if (error) {
      throw error
    };

    for (let person of results) {
      names += `<span>${person.name}</span><br/>`;
    };  

    res.send('<h1>Full Cycle Rocks! </h1><br/>' + names)       
    });
    connection.end()
})

app.listen(port, () => {
  console.log('Rodando na porta ' + port)
});

function getRandomName() {

  let totalSyllable = getRandomIntInclusive(2, 5);
  let name = "";

  for (countSyllable = 1; countSyllable <= totalSyllable; countSyllable++) {

    name += getRandomConsonant() + getRandomVowel();

  }
  return name;

}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomVowel() {

  let listVowels = "AEOIU";
  let randomNumber = getRandomIntInclusive(1, 5);

  return listVowels.substring(randomNumber - 1, randomNumber);

}

function getRandomConsonant() {

  let listConsonants = "BCDFGHJKLMNPQRSTWVXYZ";
  let randomNumber = getRandomIntInclusive(1, 21);

  return listConsonants.substring(randomNumber - 1, randomNumber);

}