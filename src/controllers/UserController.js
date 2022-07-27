const userModel = require('../models/userModel');

const jwt = require('jsonwebtoken');

//********************CREATE_USER*************************************//

const createUser = async function(req,res){
    try {
        if(Object.keys(req.body).length!= 0){
            let authors = await userModel.create(req.body);
            res.status(201).json({status:true, data:authors});
        }
        else{
            res.status(400).json({status:false, msg:"Bad Request!"});
        }
        
    } catch (error) {
        res.status(500).json({status:false, error:error.message})
        
    }

}

//*******************************USER_LOGIN **************************************//

const UserLogIn = async function (req,res){
    try {
        let body = req.body
        const {email,password}=body //destructuring

    // let email = req.body.email;
    // let password = req.body.password;
    let User = await userModel.findOne({ email: email, password: password });
    if (!User)
    return res.status(400).send({status: false,msg: "username or the password is not correct"});

    const token = jwt.sign({authorId: User._id },"functionUp-project");
    res.setHeader('x-api-key',token);
    return res.status(200).json({status:true, data:token});
    } catch (error) {
        return res.status(500).json({ msg: "Error", Error: error.message });
    }
}
module.exports = {createUser,UserLogIn}
   
 
