'use strict';

const express = require('express');
const app = require('express')();
const bodyParser = require('body-parser');
const path =require('path');
const db = require('./db/index');
const Task = require('./db/model/taskModel');
const ObjectId = require('mongodb').ObjectID;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client'));

/**
 * GET /tasks
 * 
 * Return the list of tasks with status code 200.
 */
app.get('/tasks', (req, res) => {
  Task.find({})
    .then(data => {
      res.send(data)})
    .catch(err => {
              console.log(err);
          })
})


/**
 * PUT /task/update/:id/:title/:description
 * 
 * id: Number
 * title: string
 * description: string
 * 
 * Update the task with the given id.
 * If the task is found and update as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.put('/task/update/:id/:title/:description', (req, res) =>{

    const id = req.params.id
    const title = req.params.title
    const description = req.params.description

    const newValue = {title:title,description:description};

    Task.findByIdAndUpdate(id, newValue, {new: true})
    .then( previousValue => {
        // Task.findOne({ _id : id })
        // .then(updated => {
        res.send(previousValue);
        // })
        // .catch(err => {
        //     console.log(err);
        // });
    })
    .catch(err => {
        console.log(err)
    })
})
/**
 * POST /task/create/:title/:description
 * 
 * title: string
 * description: string
 * 
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201.
 */
app.post('/task/create/:title/:description', (req, res) => {

    const title = req.params.title
    const description = req.params.description 
    const task = new Task({title:title,description:description});

    task.save()
    .then(item => {
     res.send("user saved to database");
     })
    .catch(err => {
        console.log(err)
    });
})

/**
 * DELETE /task/delete/:id
 * 
 * id: Number
 * 
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.delete('/task/delete/:id', (req, res)=> {
        const id = req.params.id;
        Task.findByIdAndRemove(id)
        .then(()=>{
            res.send('removed')
        })
        .catch(err => {
            console.log(err)
        })
})

app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
})
