const mongoose = require('mongoose');

const Cake = mongoose.model('cakes');

module.exports={
    index: (req, res)=>{
        Cake.find({}, (err, cakes)=>{
            console.log(err);
            console.log(cakes);
            return res.json(cakes);
        });
    },
    cake: (req, res)=>{
        Cake.findOne({_id: req.params.cake_id}, (err, cake)=>{
            if(err) {
                return res.json({error: "watting"});
            };
            return res.json(cake);
        });
    },
    newCake:(req, res)=>{
        var newCake = new Cake(req.body);
        newCake.save((err)=>{
            if(err){
                // // console.log("wat", err);
                // for(var key in err.errors){
                //     // errorInfo['error'].push(err.errors[key].message);
                // }
                // res.json(errorInfo);
                return res.json({errors: "error"});
            } else{
                return res.json({cake: "You made new cake!"});
            }
        });
    },
    updateCake:(req, res)=>{
        Cake.findOne({_id: req.params.cake_id}, (err, cake)=>{
            if(err) {
                return res.redirect('/api/cakes');
            };
            return res.json(cake);
        });
    },
    addRate:(req, res)=>{
        console.log(req.body);
        console.log(req.params.cake_id);
        Cake.findOne(
            {_id: req.params.cake_id},
            (err, cake)=>{
            console.log(cake);
            if(err) {
                console.log(err);
                return res.json({errors: "error"});
            };
            cake.rating.push(req.body);
            cake.save((err, wat)=>{
                if (err){
                    return res.json({error: "Ya dun goofed"})
                }
                return res.json(wat);
            })
        })
    },
    removeCake:(req, res)=>{
        Cake.remove({_id: req.params.cake_id}, (err)=>{
            res.redirect('/api/cakes');
        });
    },
}