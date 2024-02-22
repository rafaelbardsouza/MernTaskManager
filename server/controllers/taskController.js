const mongoose = require('mongoose')
const Tasks = require('../dbTasks')

const getTasks = async (req, res) => {
    try{
        const allTasks = await Tasks.find({}).sort({ createdAt: -1})
        res.status(200).send(allTasks)
    }catch(error){
        res.status(400).send(error.message)
    }
}

const createTask = async (req, res) => {
    const dbTask = req.body
    try{
        const newTask = await Tasks.create(dbTask)
        res.status(201).send(newTask)
    }catch(error){
        res.status(500).send(error.message)
    }
}

const updateTask = async (req, res) => {
    const {id} = req.params
    try{
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`theres no task with ${id} id.`)
    }
    const taskID = {_id: id}
    const update = {completed: true}
    const updateTask = await Tasks.findOneAndUpdate(taskID, update)
        if(!updateTask){
            return res.status(404).send(`theres no task with ${id} id.`)
        }
    res.status(200).send(newTask)
    }catch(error){
        res.status(500).send(error.message)
    }
}

const deleteTask = async (req, res) => {
    const {id} = req.params
    try{
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`theres no task with ${id} id.`)
    }
    const deleteTask = await Tasks.findOneAndDelete({_id: id})
    res.status(200).send(deleteTask)
    }catch(error){
        res.status(500).send(error.message)
    }
}

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
}
