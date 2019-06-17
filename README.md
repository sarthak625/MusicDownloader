# Music Downloader

An app where you provide a list of songs, and all of them are downloaded in your device.

# Notes

## Day 1

- I was roaming in my terrace listening to songs on spotify, but the internet here is really bad. I was
thinking maybe i should download songs when i get back to my room using the wifi, but i dont want to search every song and go through those annoying ads and download each one of them. This is why i have decided to create this project.
- I am thinking of downloading songs from www.pagalworld.live and probably Amazon music
- Amazon Music will likely have their APIs, so it might be easy to download from there. 
- I will try to scrape pagalworld using cheerio
- I want this to be a web app so I can integrate it with my resume website when i create one.
- I have completed the logic of scraping pagalworld to get the download links to my songs. Tommorrow, i will add the logic of some other website.
- Day 1 was easy. I was successfully able to scrape the website and get the download links to various songs.

## Day 2

- Today i will try to use the spotify API to integrate spotify with my web app.
- Using sound cloud, i will get the trending songs and try to download them.
- Spotify API requires user to be authenticated using Spotify, after which the API will return an access token which will be used to authorize the API calls.
- I will start working on the frontend. I need to learn React first.

# Envs

Create a .env file with the following

```js
SPOTIFY_CLIENT_ID=<your-spotify-client-id>
SPOTIFY_CLIENT_SECRET=<your-spotify-secret>
```