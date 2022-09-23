const express=require('express')
var request = require('request');
const cors=require('cors')()
const app=express();


app.use(cors);    

app.get('/',(req,res)=>{
    res.send("got it")
})
app.get('/get_token',(req,res)=>{
    
    var clientServerOptions = {
        uri: 'https://devcore02.cimet.io/v1/generate-token',
        body: null,
        method: 'POST',
        headers: {
            'Api-key': '4NKQ3-815C2-8T5Q2-16318-55301'
        }
    }
    request(clientServerOptions, function (error, response) {
        
        let x=response.body;
        x=JSON.parse(x)
        return res.json(x);
    });

})

app.get('/get_plans',(req,res)=>{
   
    const auth_token=req.headers.auth;

    
    var clientServerOptions = {
        uri: 'https://devcore02.cimet.io/v1/plan-list',
        body: JSON.stringify({"session_id":"eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9"}),
        method: 'POST',
        headers: {
            'Api-key': '4NKQ3-815C2-8T5Q2-16318-55301',
            'Auth-token':auth_token,
            'content-type':'application/json'
        }
    }
    request(clientServerOptions, function (error, response) {        
        let x=response.body;
        x=JSON.parse(x)
        return res.json(x);
    });
})

const port=3008;

app.listen(port,()=>{
    console.log("Server Started on port ",port)
})