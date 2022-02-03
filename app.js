const express = require('express')
const bodyParser = require('body-parser')
const ejs = require("ejs");
const app = express();
const mongoose = require('mongoose')
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'))
app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://timphamvn33:Thuonghuyen55@cluster0.fo64y.mongodb.net/appointmentDB');

// create the schema for database
const appointmentSchema = new mongoose.Schema({
    schedule : String,
    name: String,
    date: String,
    time: String,
    service: String
})
// create model
const AppointmentDB = mongoose.model("AppointmentDB", appointmentSchema);


app.get('/', function(req, res){
    res.render("doc", {});
})

app.get("/appointment", (req, res)=>{
    res.render("appointment", {})
})
app.get("/admin", (req, res)=>{
    AppointmentDB.find({}, function(err, foundAppointment){
        if(!err){
            console.log("found appointment")
        }
        res.render("admin", {customers: foundAppointment})
    })
    
})
app.get("/service", (req, res)=>{
    res.render("service", {})
})

app.post("/", (req, res)=>{
   
    const cust = new AppointmentDB({schedule: req.body.schedule, 
        name: req.body.name, date: req.body.date, time: req.body.time,
        service: req.body.service});
        cust.save()
    res.redirect("/appointment")
    
  
   
})
app.post("/delete", function(req, res){
   
    const checkId= req.body.cancel
        console.log(checkId);
     AppointmentDB.findByIdAndRemove(checkId, function(err){
         if(!err){
             console.log("good")
         }
         res.redirect("/admin")
     })
    
     
    
 })

app.post('/book', function(req, res){
    res.redirect("/appointment")
})














let port = process.env.PORT; 
if(port == null || port == ""){
 port = 3000;
}

app.listen(port, ()=>{
    console.log("server works")
})