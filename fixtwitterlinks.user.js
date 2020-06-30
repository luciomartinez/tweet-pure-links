// ==UserScript==
// @name        Fix Twitter links
// @namespace	  https://github.com/luciomartinez/fix-twitter-links
// @description Fix Twitter links from your timeline and say goodbye to its URL shortener!
// @version     3
// @grant       none
// @match	      https://twitter.com/*
// @match       https://tweetdeck.twitter.com/*
// ==/UserScript==

const WATCH_FOR_NEW_LINKS_EVERY_N_SECS = 2;

fixLinks();

function fixLinks() {
  const domain = window.location.hostname;
  if (domain === 'tweetdeck.twitter.com') {
    fixLinksInTweetDeck();
  } else {
    fixLinksInTwitter();
  }
}

function fixLinksInTwitter() {
  startIntervalWithCleaner(parseLinksAtTwitter);
}

function fixLinksInTweetDeck() {
  startIntervalWithCleaner(parseLinksAtTweetDeck);
}

function startIntervalWithCleaner(cleaner) {
  setInterval(cleaner, WATCH_FOR_NEW_LINKS_EVERY_N_SECS * 1000);
}

function parseLinksAtTwitter() {
  const selectShortLinks = 'a[href^="https://t.co/"][title]:not([data-link-fixed])';
  const links = document.querySelectorAll(selectShortLinks);
  links.forEach((link) => {
    updateLinkAndMarkAsFixed(link, link.title);
  });
}

function parseLinksAtTweetDeck() {
  const selectFromTweets = '.tweet-text > .url-ext[href^="https://t.co/"][data-full-url]:not([data-link-fixed], .is-vishidden)';
  const selectFromQuotedTweets = '.quoted-tweet .url-ext[href^="https://t.co/"][data-full-url]:not([data-link-fixed])';
  const selectFromTweetDetail = '.tweet-detail .url-ext[href^="https://t.co/"][data-full-url]:not([data-link-fixed])';
  const multipleSelects = `${selectFromTweets}, ${selectFromQuotedTweets}, ${selectFromTweetDetail}`;
  const links = document.querySelectorAll(multipleSelects);
  links.forEach((link) => {
    updateLinkAndMarkAsFixed(link, link.dataset.fullUrl);
  });
}

function updateLinkAndMarkAsFixed(anchorEl, fixedUrl) {
  console.info('Fix Twitter links: URL parsed', fixedUrl);
  setHrefTo(anchorEl, fixedUrl);
  markAsFixed(anchorEl);
}

function setHrefTo(el, url) {
  el.href = url;
}

function markAsFixed(el) {
  el.dataset.linkFixed = 1;
}
