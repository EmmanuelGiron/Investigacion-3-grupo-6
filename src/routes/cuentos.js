const{Router} = require('express');
const router = Router();
//const _ = require('underscore');

const cuentos = require('../sample.json');
console.log(cuentos);




router.get('/', (req,res) =>{
    res.json(cuentos);
});

router.post('/',(req,res) =>{
    const  {title,year,rating} = req.body;
    if(title && year && rating)
    {
        const id = cuentos.length + 1;
        const newCuento = {...req.body,id};
        console.log(newCuento);
        cuentos.push(newCuento);
        res.json(cuentos);
    }
    else{
        res.status(500).json({error : "ERROR"});
    }
});

//router.delete('/:id',(req,res)=>{
  //  _.each(cuentos.(cuento, i) =>{

    //});
//});

module.exports =router;