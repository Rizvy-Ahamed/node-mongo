const express = require('express');


const app = express();


app.get('/' ,(req, res) =>{
    res.send("Thank you for calling me....yeaaaa");
})

app.listen(5000, () => console.log('listening to port 5000'));
