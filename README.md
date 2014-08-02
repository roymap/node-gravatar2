# Gravatar Image and Profile URL Builder

## Installation and Tests
Package name is `node-gravatar2`.

```bash
npm install node-gravatar2 --save
```

## Usage
You can request the URL for an image or a profile based on an email.

```javascript
var Gravatar = require('node-gravatar2');

// Get a URL for a Gravatar Avatar Image URL
var imageUrl = Gravatar('steve@apple.com').avatar();

// Get a URL for a Gravatar Profile URL
var profileUrl = Gravatar('steve@apple.com').profile();
```


## Options for Image URL

There are several options that you can use to change the image returned.  You must use the option methods before you call the avatar() method.


### Size

By default, images are 80 x 80 pixels.  You can however specify the size from 1 to 2048 pixels.

```javascript
var imageUrl = Gravatar('steve@apple.com').size(200).avatar();
```

### Default Image

When no image exists for the supplied email, Gravatar will supply [this image](http://www.gravatar.com/avatar/00000000000000000000000000000000).  But you can supply your own image URL or choose one of Gravatar's default images:

* 404: do not load any image if none is associated with the email hash, instead return an HTTP 404 (File Not Found) response
* [mm](http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&f=y): (mystery-man) a simple, cartoon-style silhouetted outline of a person (does not vary by email hash)
* [identicon](http://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y): a geometric pattern based on an email hash
* [monsterid](http://www.gravatar.com/avatar/00000000000000000000000000000000?d=monsterid&f=y): a generated 'monster' with different colors, faces, etc
* [wavatar](http://www.gravatar.com/avatar/00000000000000000000000000000000?d=wavatar&f=y): generated faces with differing features and backgrounds
* [retro](http://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y): awesome generated, 8-bit arcade-style pixelated faces
* [blank](http://www.gravatar.com/avatar/00000000000000000000000000000000?d=blank&f=y): a transparent PNG image (border added to HTML below for demonstration purposes)

```javascript
var image1Url = Gravatar('steve@apple.com').default('mm').avatar();
var image2Url = Gravatar('bill@microsoft.com').default('http://foo.com/avatar.jpg').avatar();
```

### Rating

Gravatar allows users to self-rate their images so that they can indicate if an image is appropriate for a certain audience. By default, only 'G' rated images are displayed unless you indicate that you would like to see higher ratings. Using the rating() method, you may specify one of the following ratings to request images up to and including that rating:

* g: suitable for display on all websites with any audience type.
* pg: may contain rude gestures, provocatively dressed individuals, the lesser swear words, or mild violence.
* r: may contain such things as harsh profanity, intense violence, nudity, or hard drug use.
* x: may contain hardcore sexual imagery or extremely disturbing violence.

```javascript
var imageUrl = Gravatar('steve@apple.com').rating('pg').avatar();
```

### Secure Requests

If you're displaying Gravatars on a page that is being served over SSL, then you'll want to serve your Gravatars via SSL as well, otherwise you'll get annoying security warnings in most browsers. To do this, simply call the secure() method.

```javascript
var imageUrl = Gravatar('steve@apple.com').secure().avatar();
```
