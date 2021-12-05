const SpotifyWebApi = require('spotify-web-api-node'); // spotify api
//const { search } = require('.');
var spotifyApi = new SpotifyWebApi({
    clientId: "your id", 
    clientSecret: "your secret",
    redirectUri: 'redirectUri' 
  });

const scopes = [
    'ugc-image-upload',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'streaming',
    'app-remote-control',
    'user-read-email',
    'user-read-private',
    'playlist-read-collaborative',
    'playlist-modify-public',
    'playlist-read-private',
    'playlist-modify-private',
    'user-library-modify',
    'user-library-read',
    'user-top-read',
    'user-read-playback-position',
    'user-read-recently-played',
    'user-follow-read',
    'user-follow-modify'
  ];

var access_token;

function redirect(res){
    res.redirect(spotifyApi.createAuthorizeURL(scopes));
}
module.exports.redirect = redirect;


function callback(req, res) {
    const error = req.query.error;
    const code = req.query.code;
    const state = req.query.state;
  
    if (error) {
      console.error('Callback Error:', error);
      res.send(`Callback Error: ${error}`);
      return;
    }
  
    spotifyApi
      .authorizationCodeGrant(code)
      .then(data => {
        access_token = data.body['access_token'];
        const refresh_token = data.body['refresh_token'];
        const expires_in = data.body['expires_in'];
  
        spotifyApi.setAccessToken(access_token);
        spotifyApi.setRefreshToken(refresh_token);
  
        console.log('access_token:', access_token);
        console.log('refresh_token:', refresh_token);
  
        console.log(
          `Sucessfully retreived access token. Expires in ${expires_in} s.`
        );

        setInterval(async () => {
          const data = await spotifyApi.refreshAccessToken();
          const access_token = data.body['access_token'];
  
          console.log('The access token has been refreshed!');
          console.log('access_token:', access_token);
          spotifyApi.setAccessToken(access_token);
        }, expires_in / 2 * 1000);
      })
      .catch(error => {
        console.error('Error getting Tokens:', error);
        res.send(`Error getting Tokens: ${error}`);
    });
	
}
module.exports.callback = callback;


// Search artists whose name, album or artist contains 'hip hop'
function searchArtists(genre, callback){
  spotifyApi.searchArtists(genre)
  .then(function(data) {
    console.log('Search artists success', data.body.artists.items);
    callback(data.body.artists.items[19].id)
  }, function(err) {
    console.error(err);
  });
}
module.exports.searchArtists = searchArtists;

// Get an artist
function getArtist(artistid,callback){
  spotifyApi.getArtist(artistid)
  .then(function(data) {
    console.log('getArtist success', data.body);
    callback(data.body);
  }, function(err) {
    console.error(err);
  });
}
module.exports.getArtist = getArtist;

function getArtistAlbums(artistid,callback){
  spotifyApi.getArtistAlbums(artistid)
  .then(function(data) {
    console.log('getArtistAlbums success', data.body.items[0].id);
    callback(data.body.items[0].id);
  }, function(err) {
    console.error(err);
  });
}
module.exports.getArtistAlbums = getArtistAlbums;
