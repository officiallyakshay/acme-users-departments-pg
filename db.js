const pg = require('pg');
const { Client } = pg;

const uuid = require('uuid');
const client = new Client('postgres://localhost/acme_users_department');

client.connect();