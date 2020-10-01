const express = require('express');


const app = express();


app.get('/' ,(req, res) =>{
    const fruit ={
        product: "ada",
        price: 220 
    }
    res.send(fruit);
})


app.get('/fruit/banana', (req, res) =>{
    res.send({fruit: 'banana', quantity: 1000, price: 10000});
})

app.listen('/users/:id', (req, res) =>{
    console.log(req.params);
})

app.listen(8080, () => console.log('listening to port 8080'));

