
const { data }= require("../DB/currencies.json")

const getCurrencies=(req,res) =>{

    const {min_value}=req.query;

    if(min_value){
        const result=data.filter((item) => Number(item.min_size)===Number(min_value));
        res.json(result)
    }else{
        res.json(data)
    }
}


const getCurrenciesBySymbol=(req,res) => {
    //console.log(req.params) // symbol: "inr"
    // return res.json(data)
    
const {symbol} =req.params;
 const result=data.find((ele) => ele.id.toLowerCase()===symbol.toLowerCase()
 )
 if(result){
    return res.json(result)
}
else{
    return res.status(404).json("Invalid Symbol")
}
}
module.exports= { getCurrencies, getCurrenciesBySymbol} //named export
//module.export= getCurrencies default export