const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const video = require('../models/video');

const db = "mongodb://test:test@ds135946.mlab.com:35946/videoplayer";
mongoose.Promise = global.Promise;//to avoid any warnings thrown by mongoose
mongoose.connect(db,function(err){
    if(err){
        console.log("Error" +err);
    }
});

router.get('/videos',function(req,res){
    console.log('get request for all videos');
    video.find({}).exec(function(err,videos){
        if(err){
            console.log("Error retrieving videos");
        }else{
            res.json(videos);
        }
    })
    // res.send('api works');
});

router.get('/videos/:id',function(req,res){
    console.log('get request for a single video');
    video.findById(req.params.id).exec(function(err,video){
        if(err){
            console.log("Error retrieving videos");
        }else{
            res.json(video);
        }
    })
    // res.send('api works');
});

router.post('/video', function(req,res){
    console.log("post a video");
    var newVideo = new video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.save(function(err,insertedVideo){
        if(err){
            console.log("error saving video");
        }else{
            res.json(insertedVideo);
        }
    });
});

router.put('/video/:id',function(req, res){
    // console.log("update a video");
    video.findByIdAndUpdate(req.params.id,
    {
        $set: {title: req.body.title, url: req.body.url, description: req.body.description}
    },
    {
        new: true
    },
    function(err,updatedVideo){
        if(err){
            console.log("error updating video");
        }else{console.log("update a video");
            res.json(updatedVideo);
        }
    });
});

router.delete('/video/:id',function(req,res){
    video.findByIdAndRemove(req.params.id,function(err,deletedVideo){
        if(err){
            res.send("error deleting video");
        }else{
            res.json(deletedVideo);
        }
    });
});

module.exports = router;