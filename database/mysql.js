const { reject } = require('bcrypt/promises');
const mysql = require('mysql')
const config = require('../config')

const config = {
   host: config
}

let connection;
function handleConnection() {
   connection = mysql.createConnection();
   connection.connect((err) => {
      if (err) {
         console.error('[db,err]', err);
      } else {
         console.log('DB connected')
      }
   })
   connection.on('error', err => {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
         handleConnection();
      } else {
         throw err
      }
   })
}

handleConnection();
function list() {
   return new Promise((resolve, reject) => {

   })
}