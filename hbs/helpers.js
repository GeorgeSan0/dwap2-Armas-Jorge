const hbs=require('hbs');

//Para el Producto1
hbs.registerHelper('Producto1',(i)=>{
    let fs=require('fs');
    let data=fs.readFileSync('./data/data.json', 'utf8');
    var words=JSON.parse(data);
    if(i==1){
        return words[0].Producto1;//Regresa el Nombre del producto 1
    }else{
        return words[0].Precio1;//Regresa el precio del producto 1
    }
});

//Para el Producto2
hbs.registerHelper('Producto2',(i)=>{
    let fs=require('fs');
    let data=fs.readFileSync('./data/data.json', 'utf8');
    var words=JSON.parse(data);
    if(i==1){
        return words[1].Producto2;//Regresa el Nombre del producto 2
    }else{
        return words[1].Precio2;//Regresa el precio del producto 2
    }
});

//Para el Producto3
hbs.registerHelper('Producto3',(i)=>{
    let fs=require('fs');
    let data=fs.readFileSync('./data/data.json', 'utf8');
    var words=JSON.parse(data);
    if(i==1){
        return words[2].Producto3;//Regresa el Nombre del producto 3
    }else{
        return words[2].Precio3;//Regresa el precio del producto 3
    }
});