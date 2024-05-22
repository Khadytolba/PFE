const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8080

//schema
const schemaData = mongoose.Schema({
    reference : String,
    description : String,
    is_retrocede : Boolean,
    amount : Number,
    amount_in_ref_currency : Number,
    start_date : Date,
    end_date : Date,
    start_date_refund : Date,
    end_date_refund : Date,
    interest_rate : Number,
    period : Number,
    grace_period : Number,
    
},
{
    timestamps : true
})


const userModel = mongoose.model("user",schemaData)


// read
//  http://localhost:8080/
app.get("/",async(req,res)=>{
    const data = await userModel.find({})
    res.json({success : true , data : data})
})

//create data || save data in mongodb
//http://localhost:8080/create
/*
 {
     reference,
     description,
     is_retrocede,
     amount : Number,
     amount_in_ref_currency,
     start_date,
     end_date,
     start_date_refund,
     end_date_refund,
     interest_rate,
     period,
     grace_period
 }

*/

app.post("/create",async(req,res)=>{
    console.log(req.body)
    const data = new userModel(req.body)
    await data.save()
    res.send({success : true, message : "data save successfully", data : data})
})

//update data
//http://localhost:8080/update
/*
{
    id :"",
  reference :"",
  description : "",
  is_retrocede : "",
amount : "",
amount_in_ref_currency : "",
start_date :"",
end_date :"",
start_date_refund :"",
end_date_refund : "",
interest_rate : "",
period :"",
grace_period :"",
}

*/

app.put("/update",async(req,res)=>{
    console.log(req.body)
    const {_id,...rest} = req.body
    
    console.log(rest)
    const data = await userModel.updateOne({_id : _id},rest)
    res.send({success : true, message : "data updated successfully", data : data})
    
})

//delete api
//http://localhost:8080/delete/id
app.delete("/delete/:id",async(req,res)=>{
    const id = req.params.id
    console.log(id)
    const data = await userModel.deleteOne({_id : id})
    res.send({success : true, message : "data deleted successfully", data : data})

})



mongoose.connect("mongodb://localhost:27017/crudoperation")
.then(()=>{
    console.log("connect to DB")
    app.listen(PORT,()=>console.log("server is running"))
})


.catch((err)=>console.log(err))

