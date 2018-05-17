const mongoose = require('mongoose');

const cakeSchema = new mongoose.Schema({
    baker:{type:String, required:true},
    image: {type:String, required:true},
    rating: [
        {
            comment: {type:String}, 
            rate: {type: Number},
        }
    ],
}, {timestamps: true});

const Cake = mongoose.model('cakes', cakeSchema);