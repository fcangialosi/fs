/*
Version : 1.1
*/
jQuery(document).ready(function($){
    "use strict";

  // Scroll down button
  $("#scroll-icon").on('click', function() {
     $('body').animate({scrollTop: +700}, 1000);
  });

  mapboxgl.accessToken = 'pk.eyJ1IjoiZmNhbmdpYWxvc2k5NCIsImEiOiJjajZhNnJ5YnMweXhnMzRsN2NqYWNhbWlrIn0.jIXe8x7CmL6wHlcSX7al4w';
  var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/fcangialosi94/cj6a9bv0r31bw2rp7r629ukkg', // stylesheet location
    center: [-77.134388, 38.874426], // starting position [lng, lat]
    zoom: 11.80 // starting zoom,
  });
  map.scrollZoom.disable();

  var ceremony_start = new Date(2017, 12-1, 30, 16, 0, 0, 0);
  var countdown_text = $('#announce-countdown span');
  countdown_text.text(countdown(ceremony_start).toString());
  window.setInterval(function(){
    countdown_text.text(countdown(ceremony_start).toString());
  }, 1000);

  
  // var container = $('#masonry');
  // var msnry;
  // imagesLoaded(container, function() {
  //   msnry = new Masonry(container, {
  //     itemSelector: '.grid-item',
  //     'gutter' : 10
  //   });
  // });

  var elem = document.querySelector('#masonry');
  imagesLoaded(elem, function() {
  var msnry = new Masonry(elem, {
    itemSelector : '.grid-item',
    'gutter': 15,
    fitWidth: true
  });
  });


/*
  var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('bg-video', {});
    }
    // player.mute() "???"
*/

});

