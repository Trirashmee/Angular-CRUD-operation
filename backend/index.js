const express=require('express')
const app= express()
const mongoose  = require('mongoose')
const bodyparser =require('body-parser')
const jsonparser=bodyparser.json()
const cors= require('cors')
app.use(cors())
mongoose.connect('mongodb+srv://trirashmee:1234@cluster0.hy0isst.mongodb.net/Employees?retryWrites=true&w=majority',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        }).then(
            ()=>{console.log('Database mongoose connected')}
        )
     
        const empdetails=  require("./models/empdetails.js")

        app.get('/empdetails',(req,res)=>{
            empdetails.find({}).then((data)=>{console.log(data);res.json(data)})
        })


        app.post('/addemp',jsonparser,(req,res)=>{
    
            const ep = new empdetails({
                _id:new mongoose.Types.ObjectId(),
                    name:req.body.name,
                    id:req.body.id,
                    location:{city:req.body.city,state:req.body.state},
                    ctc:req.body.ctc,
                    exp:req.body.exp
            })
            ep.save().then(
                (msg)=>{res.json(msg)}
            )
            
            })

             app.delete('/delemp/:id',(req,res)=>{
                empdetails.deleteOne({_id:req.params.id}).then((msg)=>{res.json(msg)}).catch((err)=>{console.log(err)})
             })


             app.put('/updtemp/:id',jsonparser,(req,res)=>
             { empdetails.updateOne({_id:req.params.id},
                {$set:{
               name:req.body.name,
                id:req.body.id,
                location:{
                city:req.body.city,
            state:req.body.state},
            ctc:req.body.ctc,
            exp:req.body.exp,

               }}).then((msg)=>{res.json(msg)}).catch((err)=>{console.log(err)})
             })
             
app.listen(3200,console.log('server is running on port 3200'))
