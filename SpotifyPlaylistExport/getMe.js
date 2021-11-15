const fs = require('fs')
const SpotifyWebApi = require('spotify-web-api-node');
const token = "BQCk4W06G09JDWCpyAINItN64VUmsV5K7aVzreODllupHpBeFlv5Q2nMrhpm5dNyiv8fPF_b0iOAi1URFRu0iNZM6NN9EsdoFRezDpv6nm0Kvn_sLwR-ECrW55rGC6PLAnaH2txUBp2EZhk4-APd5RUv3uamnGAaVp1M_2k1_nHlwHyzPRJzeLL-fQTx7Sfgf287qF5lT4FtAhMqTLMnQySlY22UsiaglpulLL32cgLi4Bgn3qA7Ti4_VUPsFOIFK8dGr6LS0B3IvR1_NhZbUcPkwXknZBM3RjKT4zT6aaTxs8uy_HhP";

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(token);

//GET MY PROFILE DATA
function getMyData() {
  (async () => {
    const me = await spotifyApi.getMe();
    // console.log(me.body);
    getUserPlaylists(me.body.id);
  })().catch(e => {
    console.error(e);
  });
}

//GET MY PLAYLISTS
async function getUserPlaylists(userName) {
  const data = await spotifyApi.getUserPlaylists(userName)

  console.log("---------------+++++++++++++++++++++++++")
  let playlists = []

  for (let playlist of data.body.items) {
    console.log(playlist.name + " " + playlist.id)
    
    let tracks = await getPlaylistTracks(playlist.id, playlist.name);
    // console.log(tracks);

    const tracksJSON = { tracks }
    let data = JSON.stringify(tracksJSON);
    fs.writeFileSync(playlist.name+'.json', data);
  }
}

//GET SONGS FROM PLAYLIST
async function getPlaylistTracks(playlistId, playlistName) {

  const data = await spotifyApi.getPlaylistTracks(playlistId, {
    offset: 1,
    limit: 100,
    fields: 'items'
  })

  // console.log('The playlist contains these tracks', data.body);
  // console.log('The playlist contains these tracks: ', data.body.items[0].track);
  // console.log("'" + playlistName + "'" + ' contains these tracks:');
  let tracks = [];

  for (let track_obj of data.body.items) {
    const track = track_obj.track
    tracks.push(track);
    console.log(track.name + " : " + track.artists[0].name)
  }
  
  console.log("---------------+++++++++++++++++++++++++")
  return tracks;
}

getMyData();
