const router = require("express").Router();



const { getCurrencies ,getCurrenciesBySymbol} = require("../controllers/currencies.controller");




router.get("/title" ,(req,res) => {
    res.write("<h1>currencies database</h1>")
    
    
    res.end();
})
router.get("/",getCurrencies);
router.get("/:symbol", getCurrenciesBySymbol);


module.exports =router ;// default export

//Export routing from here
//Import in index.js
//register to express
