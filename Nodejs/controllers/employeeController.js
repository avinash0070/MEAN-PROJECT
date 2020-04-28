

const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Employee } = require('../Model/employee.js');

// => localhost:3000/employees/
router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});
//=> for perticular id :-)
router.get('/:id', (req, res) => {
        if (!ObjectId.isValid(req.params.id)){
           return res.status(404).send(`no record : ${req.params.id}`);}

 Employee.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
        });
    });
    //to update the employess  :-)
 router.put('/:id',(req,res)=>
 { 
    if (!ObjectId.isValid){(req.params.id) }
    return res.status(404).send(`invalid id : ${req.params.id}`)
    
    var emp=
    {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    }
    Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>
    {
        if(!err){ res.send(doc)}
        else{ console.log('error in update'+JSON.stringify(error,undefined,2))}
    });
});

router.post('/', (req, res) => {
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

//delet opration 
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

    


module.exports = router;