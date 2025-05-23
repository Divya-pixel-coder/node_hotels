//built connection of mongodb with node.js
//import db
const mongoose=require('mongoose');
require('dotenv').config();
//const mongoURL=process.env.MONGODB_URL;
const mongoURL=process.env.MONGODB_URL_LOCAL;

//define the mongodb connection url
//const mongoURL=''//replace my db with your db name and this is local url
//const mongoURL= '' //this is remote or online url
//set up the mdb connection/establish
mongoose.connect(mongoURL,{
    useNewURLParser:true,
    UseUnifiedTopology:true

})
//get the default connection
//mongodb maintains a default connection object representing the mongodb connection
const db=mongoose.connection;

//define event listeners for db connection
db.on('connected',() => {
    console.log('connected to mongodb server');
})
db.on('connected',(err) => {
    console.error('mongodb connection error:'.err);
})
db.on('disconnected',() => {
    console.log(' mongodb disconnected ');
})

//export the db connection
module.exports=db;
