
const { data }=require("../DB/users.json");



const getAllUsers =  (req,res)=>{
    return res.json(data);
}



const searchUsersByQuery= (req,res) => {

    //console.log("function executed")
    // const age = req.query.dob.age;
    // const gender = req.query.gender;
    const{ gender , age} =req.query ;

    if(!age && !gender){
      return res.status(422).json({message: "Missing search params"})

    }

    if(age){
      if(!Number(age)){
        return res.status(422).
        json({message: "Age out of bounds.It should be a number"})

      }

    }
    if(age >= 100 || age < 0){
      return res.status(422).json({
        message: "Age out of bounds. It should be a number between 0 and 100 "
      })
    }
      if(gender){
        if(!["female" , "male"].includes(gender)){
          return res.status(422).
          json({message: "Gender can either be `male` or `female` "})
          }
      }

      

    if (gender && age) {
        const result = data.filter(item => item.gender === gender && Number(item.dob.age) >= Number(age));
        res.json(result);
      } else if (gender) {
        const result = data.filter(item => item.gender === gender);
        res.json(result);
      } else if (age) {
        const result = data.filter(item => Number(item.dob.age) === Number(age));
        res.json(result);
      } else {
        res.sendStatus(404);
      }
    };

const getUsersById =(req,res) => {
    const {uuid} =req.params;
 const result=data.find((ele) => ele.login.uuid===uuid
 )
 if(result){
    return res.json(result)
}
else{
    return res.status(404)
}
}




module.exports={ getAllUsers, searchUsersByQuery ,getUsersById }