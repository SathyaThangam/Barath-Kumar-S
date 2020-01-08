const express = require('express')
const router = express.Router();

// const favourites = require('../database/models/favourites');
const models = require('../database/models');

router.post('/add',async (req, res)=> {
    models.favourites.create({
        userid : req.body.userid,
        movie : req.body.movie
    }).then((val)=>{
        res.json(val)
    })
});

router.post('/show',async (req,res)=>{
    let movie=[];
    models.favourites.findAll({
        where : { userid : req.body.userid },
        attributes : ['movie'],
    }).then((val)=>{
        val.map((fav,i)=>{
            movie[i]=fav.dataValues.movie;
        })
        res.json(movie)
    })
})

router.post('/remove',async (req, res)=> {
    models.favourites.destroy({
        where : {movie : req.body.movie}
    }).then((val)=>{
        res.json(val)
    })
});


module.exports = router;