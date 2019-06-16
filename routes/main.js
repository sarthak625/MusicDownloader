const express = require('express');
// Status codes
const { errors, success } = require('../logic/status-codes');

const router = express.Router();

// Import downloader class
let Downloader = require('../logic/downloader');

router.get('/download/pagalworld',(req,res) => {
    let songs = req.body.songs;

    if (! songs){
        res.send(errors.BadRequest(`You did not specify the songs in the request body`));
    }
    else if (! Array.isArray(songs)){
        res.send(errors.BadRequest(`You have to provide a list of songs`));
    }
    else{
        let downloader = new Downloader(songs);
        downloader.downloadFromPagalWorld()
        .then(result => res.send(result))
        .catch(err => res.send(err));
    }
});

module.exports = router;