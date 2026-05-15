const mongoose = require("mongoose");

const user = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    avatar : {
        type : String,
        default : "https://t3.ftcdn.net/jpg/06/33/54/78/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg",
    },
    role : {
        type : String,
        default : "user",
        enum : ["user","admin"],
    },
    favourites:[
        {
            type: mongoose.Types.ObjectId,
            ref: "books"
        }
    ],
    cart:[
        {
            type: mongoose.Types.ObjectId,
            ref: "books"
        }
    ],
    orders:[
        {
            type: mongoose.Types.ObjectId,
            ref: "order"
        }
    ],
},
    {timestamps : true}
);
module.exports = mongoose.model("user",user);