const mysql = require('mysql2')
const conn = mysql.createConnection({
    host : 'localhost'
    ,port : 3306
    ,database : 'nodejs'
    ,password : '1234'
    ,user : 'root'
})

conn.connect()
console.log('DB 연결 완료!')
module.exports = conn;