const pg = require('pg');
const { Client } = pg;

const uuid = require('uuid');
const client = new Client('postgres://localhost/the_acme_db');

client.connect();

const SQL = `
  DROP TABLE IF EXISTS users;
  DROP TABLE IF EXISTS departments;
  
  CREATE TABLE departments(
    id INT PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
  );

  CREATE TABLE users(
    id INT PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    department_id INT REFERENCES departments(id)
  );

  INSERT INTO departments(id, name)
  values('12345', 'Accounting');
  INSERT INTO departments(id, name)
  values('12346', 'Marketing');

  INSERT INTO users(id, name)
  values('5678', 'Howard');
  INSERT INTO users(id, name)
  values('7890', 'Jimmy');

`
const sync = async () => {
  try {
    await client.query(SQL);
  }
  catch(ex) {
    console.log(ex.message);
  }
};

const findAllUsers = async () => {
  const response = await client.query('Select * FROM users;');
  return response.rows;
}

const findAllDepartments = async () => {
  const response = await client.query('Select * FROM departments;');
  return response.rows;
}

module.exports = {
  sync,
  findAllUsers,
  findAllDepartments
}