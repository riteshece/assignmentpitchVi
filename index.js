const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const route = require('./routes/route');
const mongoose = require('mongoose');
const blogModel = require('./models/blogModel');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', route);

mongoose.connect("mongodb+srv://ratneshnath:RATNESh99@cluster0.x9keh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});




// let blogID = req.body; //622f3340190388d4d8ad3adc
// if(!blogID){
//     res.s
// }
// let data = await blogModel.find({isDeleted: false},{isPublished: true})

// let result = [];
// for (let i = 0; i < len; i++) {
//     if (blogFound[i].isDeleted == false && blogFound[i].isPublished == true) {
//       arr.push(blogFound[i]);
//     } else {
//       continue;
//     }
//   }