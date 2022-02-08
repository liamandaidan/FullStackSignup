const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()
//replace replace with correct user and pass
mongoose.connect("mongodb+srv://replace:replace@cluster0.ayepn.mongodb.net/mytable?retryWrites=true&w=majority", () => console.log("Database connected!"))
/*
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Canadian:Canadian@cluster0.ayepn.mongodb.net/mytable?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log("Database connected!")
    // perform actions on the collection object
    client.close();
});
*/
app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(4000, () => console.log("Server is up and running!"))

