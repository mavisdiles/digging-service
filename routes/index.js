const express = require("express");
const { nextTick } = require("process");
const router = express.Router();
var api = require('./api');

router.get('/', (req, res) => {
    api.redirect(res);
  });

router.get('/callback', (req, res) => {
    api.callback(req,res);
    res.render('index');
});

router.get("/select", (req, res) => { 
    res.render("select", {page: "select"})
});

router.get("/rock", (req, res) => {
  var genre = 'rock';
  api.searchArtists(genre,function(artistid){
    api.getArtist(artistid,function(artistdata){
      res.render("rock", {artistdata: artistdata});
    });
  }); 
});
router.get("/electronic", (req, res) => {
  var genre = 'electronic';
  api.searchArtists(genre,function(artistid){
    api.getArtist(artistid,function(artistdata){
      res.render("electronic", {artistdata: artistdata});
    });
  }); 
});
router.get("/hiphop", (req, res) => {
  var genre = 'hiphop';
  api.searchArtists(genre,function(artistid){
    api.getArtist(artistid,function(artistdata){
      res.render("hiphop", {artistdata: artistdata});
    });
  }); 
});
router.get("/acoustic", (req, res) => {
  var genre = 'acoustic';
  api.searchArtists(genre,function(artistid){
    api.getArtist(artistid,function(artistdata){
      res.render("acoustic", {artistdata: artistdata});
    });
  }); 
});
router.get("/jazz", (req, res) => {
  var genre = 'jazz';
  api.searchArtists(genre,function(artistid){
    api.getArtist(artistid,function(artistdata){
      res.render("jazz", {artistdata: artistdata});
    });
  }); 
});
router.get("/pop", (req, res) => {
  var genre = 'pop';
  api.searchArtists(genre,function(artistid){
    api.getArtist(artistid,function(artistdata){
      res.render("pop", {artistdata: artistdata});
    });
  }); 
});

module.exports = router;
