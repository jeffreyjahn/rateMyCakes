const cake = require('../controllers/controller')

module.exports= (app)=>{
    app.get('/api/cakes', (req, res)=>{
        cake.index(req,res);
    })
    app.post('/api/new', (req, res)=>{
        cake.newCake(req, res);
    })
    app.get('/api/:cake_id', (req, res)=>{
        cake.cake(req,res);
    })
    app.put('/api/update/:cake_id', (req, res)=>{
        cake.updateCake(req,res);
    })
    app.put('/api/update/:cake_id/add_rating', (req, res)=>{
        cake.addRate(req,res);
    })
    app.delete('/api/remove/:cake_id', (req, res)=>{
        cake.removeCake(req,res);
    })
}