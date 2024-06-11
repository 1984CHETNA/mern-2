
const express=require("express");
const app=express();
const PORT=7000;
const currenciesRoutes = require("./routes/currencies.routes");
 const usersRoutes = require("./routes/users.routes");








  //console.log("data" , data)
app.listen(PORT ,() => {
    console.log(" App listening ....")
})



//  /currencies/:symbol (request param example)

// app.get("/currencies/:symbol" ,(req,res) => {
//     // console.log(req.params) // symbol: "inr"
//     // return res.json(data)
// const {symbol} =req.params;
//  const result=data.find((ele) => ele.id.toLowerCase()===symbol.toLowerCase()
//  )
//  if(result){
//     return res.json(result)
// }
// else{
//     return res.status(404).json("Invalid Symbol")
// }
// })
//query parameter example(min_value=0.001)
//we can send many query in 1 req(eg.localhost:7000/currencies?min_value=.01 && test=7)
// app.get("/currencies" ,(req,res) => {
//     const { min_value} =req.query;
   
//     console.log("req-query" ,req.query)
    

//     if(min_value){
//         const result= data.filter((item) => Number(item.min_size)=== Number(min_value))
    
    
//         res.json(result)
//     }else{
//         res.json(data)
//     }
// })

app.get("/status",(req,res) => {
    return res.json({"server status ": "active"});
})


app.use("/currencies" ,currenciesRoutes);
app.use("/users" , usersRoutes);






// ***********default route**************
app.get("*" ,(req,res) => {
    res.json("Invalid route")
}
)