## Publish Browser Extension

Tweet Pure Links is available as a Browser Extension via the following marketplaces.

 - [chrome web store](https://chrome.google.com/webstore/detail/tweet-pure-links/aiepfkanoffcoebholplgmjncpdbijdn?hl=en-GB)
 - [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tweet-pure-links/?src=search)

### Create a release

Run the `build.sh` to generate a `release.zip` file which will be uploaded into the marketplace.

### Versioning

The `manifest.json` file declares the version with its `version` property.

### Testing

Run the `build_unpacked.sh` to generate a `unpacked` directory containing an unpacked version that can be tested by loading it directly from the browser.
