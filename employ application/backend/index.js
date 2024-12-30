//1.import express
const express = require('express')
require('./connection')
var empModel=require("./model/employee")
//2.initialize
const app = express()

//mid
app.use(express.json())
var cors = require('cors')
app.use(cors())

//3.api
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/trial', (req, res) => {
    res.send('this is a trial message')
})
//add api
app.post('/add',async(req, res) => {
    try {
        await empModel(req.body).save()
        res.send({ message:"data added"})
    } catch (error) {
        console.log(error)
    }
})

//get api
app.get('/get', async(req, res) => {
    try {
        const data = await empModel.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

//delete api
app.delete('/remove/:id', async(req, res) => {
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send({ message: "data deleted"})
       }catch (error) {
        console.log(error)
    }
})

//update api
app.put('/update/:id', async (req, res) => {
    try {
        await empModel.findByIdAndUpdate(req.params.id)
        res.send({ message: "data updated" })
    } catch (error) {
        console.log(error)
    }
})

//4.port setting
app.listen(3004, () => {
    console.log('Server is running on port 3004')      
})

