// ==UserScript==
// @name Fix Twitter links
// @namespace	https://github.com/lucio-martinez/fix-twitter-links/
// @description Fix twitter timeline links bypassing the horrible shortener system
// @grant none
// @require https://raw.githubusercontent.com/jquery/jquery/2.1.1/dist/jquery.min.js
// @include	https://twitter.com/*
// ==/UserScript==

var seconds  = 2,
    interval = seconds * 1000;

// Solve jQuery conflicts (http://wiki.greasespot.net/@grant)
this.$ = this.jQuery = jQuery.noConflict(true);

function fixLinks() {
  // Catch only text links,
  // not pictures and other stuff
  var links = $( '.twitter-timeline-link[data-link-fixed!=1]:not(.media, .u-hidden)' );

  $( links ).each(function(){
    var data = this.dataset;
    $( this ).attr('href', data.expandedUrl);
    // Set a flag to avoid processing it again later
    $( this ).attr('data-link-fixed', 1);
    //console.log('URL parsed! :D');
  });
}

setInterval(fixLinks, interval);
