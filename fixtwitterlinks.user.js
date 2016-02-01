// ==UserScript==
// @name        Fix Twitter links
// @namespace	https://github.com/lucio-martinez/fix-twitter-links/
// @description Fix Twitter timeline links bypassing the horrible shortener system
// @version     2
// @grant       none
// @require     https://raw.githubusercontent.com/jquery/jquery/2.1.1/dist/jquery.min.js
// @include	    https://twitter.com/*
// @include     https://tweetdeck.twitter.com/*
// ==/UserScript==

var seconds  = 2,
    interval = seconds * 1000,
    domain = window.location.hostname,
    callback;

// Solve jQuery conflicts (http://wiki.greasespot.net/@grant)
this.$ = this.jQuery = jQuery.noConflict(true);

/**
 * Set a new href value into a HTML <a> element.
 */
function setUrlToLink(aElement, targetUrl) {
  $( aElement ).attr('href', targetUrl);
  // Set a flag to avoid processing it again later
  $( aElement ).attr('data-link-fixed', 1);
  //console.log('URL parsed! :D', targetUrl);
}

/**
 * Fix links for the twitter.com webite.
 */
function fixLinks() {
  // Catch only text links, not pictures and other stuff
  var links = $( '.twitter-timeline-link[data-link-fixed!=1]:not(.media, .u-hidden)' );

  $( links ).each(function(){
    setUrlToLink(this, this.dataset.expandedUrl);
  });
}

/**
 * Fix links for the tweetdeck.twitter.com website.
 */
function fixTweetDeckLinks() {
  // Catch visible links from tweets, quoted tweets and tweets in detail
  var selector = ('.tweet-text > .url-ext[data-link-fixed!=1]:not(.is-vishidden), '
                  +'.quoted-tweet .url-ext[data-link-fixed!=1], '
                  +'.tweet-detail .url-ext[data-link-fixed!=1]'),
      links = $( selector );

  $( links ).each(function(){
    setUrlToLink(this, this.dataset.fullUrl);
  });
}

// Check whether user is on TweetDeck or Twitter website
callback = (domain === 'tweetdeck.twitter.com') ? fixTweetDeckLinks : fixLinks;

// Run, run, run!
setInterval(callback, interval);
