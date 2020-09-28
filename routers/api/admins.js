const express = require('../../node_modules/express')
const router = express.Router()

const Admin = require('../../models/Admin')
const validator = require('../../validations/adminValidations.js')
const Task = require('../../models/Task.js')
const Project = require('../../models/Project.js')

//get all admin
router.get('/', async (req,res) => {
    const admins = await Admin.find()
    res.json({data: admins})
})

//get Certin admin
router.get('/:id', async (req,res) => {
    const id = req.params.id
    const admin = await Admin.findOne({'_id':id})
    res.json({msg:'get the admin successfully', data: admin})

})

// Create a admin
router.post('/', async (req,res) => {
   try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const newAdmin = await Admin.create(req.body)
    res.json({msg:'admin was created successfully', data: newAdmin})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  
})

// Update a admin
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const admin = await Admin.findOne({'_id':id})
     if(!admin) return res.status(404).send({error: 'Amdin does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const uAdmin = await Admin.findOneAndUpdate({'_id':id},req.body)
     res.json({msg: 'Admin updated successfully', data: uAdmin})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
//Delete an Admin
 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deleteAdmin = await Admin.findOneAndRemove({'_id': id})
     res.json({msg:'Admin was deleted successfully', data: deleteAdmin})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 //show all tasks
router.get('/tasks/all', async (req, res) => {
    let tasks = await Task.find()
    tasks=tasks.filter((task)=>task.accepted==null ||task.accepted==undefined)
    res.json({ data: tasks });
})
//show all tasks
router.get('/projects/all', async (req, res) => {
    let projects = await Project.find()
    projects=projects.filter((project)=>project.accepted==null ||project.accepted==undefined)

    res.json({ data: projects });
})

module.exports = router