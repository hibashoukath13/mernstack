const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://hibashoukath:hibashoukath@cluster0.n5s2j.mongodb.net/providence?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => { 
        console.log('Connected to MongoDB')
    })
    .catch((err) => {
        console.log(err)
    })