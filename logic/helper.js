const fs = require('fs');
const cheerio = require('cheerio');
const request = require('request-promise');

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

function loadThePage(url) {
    const options = {
        uri: url,
        transform: function (body) {
            return cheerio.load(body);
        }
    };

    return request(options);
}

async function getPagalWorldDownloadLink(song) {
    try {
        let url = `https://www.pagalworld.live/search?cats=&q=${encodeURIComponent(song)}`;

        // Get the search results
        let page = await loadThePage(url);
        let redirects = page('main #w0 div.cat-list a');

        // Fetch the redirect links from the search results
        let redirectLinks = [];
        redirects.each(function (i, elem) {
            let link = page(this).attr('href');
            redirectLinks.push(link);
        })

        // If no results were found, throw an error, else download the topmost result
        if (redirectLinks.length === 0) throw errors.NotFound(`0 results for ${song}`);
        else {
            let topResult = await loadThePage(`https://www.pagalworld.live/${redirectLinks[0]}`);
            let downloadLink = topResult('main div.div-nogap div.div-nogap div.downloaddiv a').attr('href');
            
            let size;
            topResult('main div.div-nogap div.div-nogap div.downloaddiv a span').each(function(){
                let value = topResult(this).html();
                if (value.includes('Size')){
                    size = value.split(' ')[1];        
                }
            });

            downloadLink = downloadLink.replaceAll(' ','%20');
            return {
                size, downloadLink
            }
        }
    }
    catch (err) {
        throw err;
    }
}

module.exports = {
    loadThePage,
    getPagalWorldDownloadLink
}