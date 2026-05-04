const express=require('express');
const app=express();
const POST=5000;
app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.listen(POST,()=>{
    console.log(`Server is running on port ${POST}`);
});