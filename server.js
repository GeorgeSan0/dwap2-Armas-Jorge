const express=require('express');
const app=express();

const hbs=require('hbs');
require('./hbs/helpers');

const port=process.env.PORT ||3000;
hbs.registerPartials(__dirname + '/views/partials');


app.use(express.static(__dirname+'/public'));
app.set('view engine','hbs');

app.get(`/`,(req,res)=>{
    res.render('home');
});

app.listen(3000, ()=>{
    console.log(`Servidor ejecutandose en el sd puerto ${port}`);
});