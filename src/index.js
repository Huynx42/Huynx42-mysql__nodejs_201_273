require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const employeeModel = require('./model/employeeModel');

const app = express();

app.use(bodyParser.json());

app.post('/create', (req,res) => {
    try{
        let infor = req.body;
        employeeModel.insertInfo(infor, function(err,result, fields) {
            if(err) throw new Error(err);
            res.status(200).json({message : 'created employee'});
        })
    }catch(err) {
        console.error(err);
    }
})

app.listen(3302, () => {
    console.log('App is listening at 3302');
})