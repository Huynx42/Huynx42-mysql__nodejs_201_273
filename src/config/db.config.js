const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : process.env.DBHOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DB
})

connection.connect(err => {
    if (err) {
        console.error(err);
    }
    console.log('Database Connected!');
    let createEmployeeDB = `create database if not exists employee`;
    let createEmpInfo = `create table if not exists information(
        id int primary key auto_increment,
        name varchar(255)not null,
        age int not null,
        address varchar(255)
    )`;
    connection.query(createEmpInfo, (err1,result,fields1) => {
        if (err) throw new Error(err1);
        console.log('Table information table');
    });
});

module.exports = connection;