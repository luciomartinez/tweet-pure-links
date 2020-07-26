![](/icons/icon.png) Tweet Pure Links
=

> Tweet Pure Links and say goodbye to the URL shorten system!

![Animated demo](https://raw.githubusercontent.com/luciomartinez/fix-twitter-links/main/demo.gif)

Table of contents:
 - [What](#whats-it)
 - [Why](#why-would-it-be-helpful)
 - [How](#how-to-use-it)

## What's it?

Have you ever wanted to open [Twitter](https://twitter.com) or [TweetDeck](http://tweetdeck.twitter.com/) and navigate thru your timeline without dealing with the Twitter URL shorten system?
Now you can with this [User Script](http://wiki.greasespot.net/User_script) that modifies the URLs on the fly.

__Before:__

![shortened link](https://i.imgur.com/2ibEGOQ.png)

__After:__

![original link](https://i.imgur.com/TR3OsuU.png)

## Why would it be helpful?

The default limitation of Twitter is when a link needs to be shared.

Use case
 1. Navigating through Twitter's timeline there's a Tweet regarding an interesting article
 2. You want to share it with your peeps
 3. Copy the link and go to your message app
 4. Past the link and whoa la, it's an awful link looking something like http://t.co/Imp051b13T0R3ad
 
Usual workaround
 1. Open the link at your browser
 2. Wait a bit until the source of the article loads
 3. Now copy this URL and paste it back to the messaging app
 
By using Fix Twitter link, the URL present on the initial Tweet would represent the final URL.  
Making it easier to just copy and paste it wherever you want without the need of workarounds.

## How to use it?

Read the [requirements](#requirements) and based on these the [installation notes](#installation).

### Requirements

User Scripts can be installed via a manager. Which manager to use will depend on the browser.

 - Firefox: [Greasemonkey](http://www.greasespot.net/)  
It's a Firefox extension that can be installed via [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/).
 - Chrome: [Tampermonkey](http://tampermonkey.net/)  
It's a Chrome extension that can be installed via [chrome web store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).
 - Safari: [Userscripts](https://github.com/quoid/userscripts)  
It's a Safari extension that can be installed via [Mac App Store](https://apps.apple.com/us/app/userscripts/id1463298887).
 - Opera: [Tampermonkey](http://www.opera.com/docs/userjs/)  
It's an Opera extension that can be installed via [Opera addons](https://addons.opera.com/en/extensions/details/tampermonkey-beta/).
 - Others: Do you *really* use another browser?

### Installation

The installation varies on the manager.

#### Greasemonkey

<details>
<summary>See installation notes for Greasemonkey</summary>

 1. Open [Fix Twitter links](https://openuserjs.org/scripts/lucio-martinez/Fix_Twitter_links) at OpenUserJS
 2. Press the `Install` button
 3. A new window will open displaying information about the userscript
  ![Greasemonkey installation window](https://i.imgur.com/7ZIERIv.png)
 4. Select `Install`
</details>

#### Tampermonkey

<details>
<summary>See installation notes for Tampermonkey</summary>

 1. Open [Fix Twitter links](https://openuserjs.org/scripts/lucio-martinez/Fix_Twitter_links) at OpenUserJS
 2. Press the `Install` button
 3. A new tab will open displaying the script information where you have an <kbd>Install</kbd> button
  ![Tampermonkey installation window](https://i.imgur.com/RDLvcu7.png)
 4. Select `Install`
</details>

#### Userscripts Safari

<details>
<summary>See installation notes for Userscripts Safari</summary>

 1. Open the Userscripts menu
 2. Select `Add` -> `New Javascript`
  ![Userscripts Menu](https://i.imgur.com/6fYg7Pk.png)
 3. On a new browser tab, copy the content of the [RAW script](https://openuserjs.org/src/scripts/lucio-martinez/Fix_Twitter_links.user.js#)
 4. Back on the Userscripts menu past the content into the new script
 5. Select `Save`
</details>

## Icons

Icons by [Icons8](https://icons8.com). See the [LICENSE](/icons/LICENSE) file.

## License

Software licensed under MIT license. See the [LICENSE](/LICENSE) file.
