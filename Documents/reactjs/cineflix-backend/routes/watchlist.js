const express = require('express')
const router = express.Router();

// router.get('/',(req, res)=> res.send('watchlist'));
const models = require('../database/models');

router.post('/add',async (req, res)=> {
    return await models.watchlist.create({
        userid : req.body.userid,
        movie : req.body.movie
    }).then((val)=>{
        res.json(val)
    })
});

router.post('/show',async (req,res)=>{
    let movie=[];
    models.watchlist.findAll({
        where : { userid : req.body.userid },
        attributes : ['movie'],
    }).then((val)=>{
        val.map((watch,i)=>{
            movie[i]=watch.dataValues.movie;
        })
        res.json(movie)
    })
})

router.post('/remove',async (req, res)=> {
    return await models.watchlist.destroy({
        where : {movie : req.body.movie}
    }).then((val)=>{
        res.json(val)
    })
});

module.exports = router;