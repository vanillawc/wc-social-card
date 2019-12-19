[![GitHub Releases](https://img.shields.io/github/release/vanillawc/wc-social-card.svg)](https://github.com/vanillawc/wc-social-card/releases)
[![NPM Release](https://badgen.net/npm/v/@vanillawc/wc-social-card)](https://www.npmjs.com/package/@vanillawc/wc-social-card)
[![Downloads](https://badgen.net/npm/dt/@vanillawc/wc-social-card)](https://www.npmjs.com/package/@vanillawc/wc-social-card)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/vanillawc/wc-social-card/master/LICENSE)
[![Published on WebComponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/vanillawc/wc-social-card)
[![Latest Status](https://github.com/vanillawc/wc-social-card/workflows/Latest/badge.svg)](https://github.com/vanillawc/wc-social-card/actions)
[![Release Status](https://github.com/vanillawc/wc-social-card/workflows/Release/badge.svg)](https://github.com/vanillawc/wc-social-card/actions)

A Vanilla Web Component that makes it easy to tag website content with a social card link

A social card is the popup you sometimes see when you hover over a link. Tagging web content with social cards has been proven to dramatically increase click-thru traffic to content. The standard used to define social cards is called OpenGraph. For more info on the standard, check out the [OpenGraphProtocol][] website. To test your link go to [OpenGraphcheck.com][].

[OpenGraphProtocol]: https://ogp.me/
[OpenGraphcheck.com]: https://opengraphcheck.com/

## Installation

```sh
npm i @vanillawc/wc-social-card
```

Then import the `index.js` file at the root of the package.

-----

## Usage

Attributes

- title - the title that displays on the card
- type - the content type ()
- image - an image to give context to the link (ideally `1200px`x`675px` - `600px`x`335px` || `16:9` ratio)
- url - the href to the content

### Load an external Markdown file using the `src` attribute

```html
<wc-social-card title="The Title" type="website" url="http://example.com" image="http://example.com/images/image.jpg"></wc-social-card>
```

***Demo: [WC-Social-Card - Basic Usage][]***

## Demo

In addition to the links above each of the demos can be run locally with.

```sh
npm run start
```

[WC-Social-Card - Basic Usage]: https://vanillawc.github.io/wc-social-card/demo/index.html
