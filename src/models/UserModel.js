const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

        name: {type: String,trim:true, required:true},

        email : {type: String, required: true,trim:true, unique: true, match: /.+\@.+\..+/}, 

        password: {type: String, required:true},

        dob : {type: Number, required: true},

        avatar: {type: String, required:true},

        address: {type:String, required:true},

        country: {type:String, required:true}
     }
    ,{timestamps: true}
   )

      module.exports = mongoose.model('User', userSchema);





