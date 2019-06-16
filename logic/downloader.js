// Use the helper file
const helper = require('./helper');
const fs = require('fs');
const { errors, success } = require('./status-codes');

/**
 * The main logic for the downloader
 */

class Downloader{
    constructor(songs){
        this.songs = songs;
    }
}

Downloader.prototype.downloadFromPagalWorld = async function(){
    try{
        let songs = this.songs;
        
        let downloads = [];
        songs.forEach(song => {
            downloads.push(helper.getPagalWorldDownloadLink(song).catch(err => err));
        });

        let result = await Promise.all(downloads);
        return result;
    }
    catch(err){
        if (err.code) throw err;
        else {
            console.log(err);
            throw errors.InternalServerError();
        }
    }
}

Downloader.prototype.setSongs = function(songs){
    this.songs = songs;
}

module.exports = Downloader;