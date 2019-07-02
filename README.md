# allmoji
A JSON document containing every emoji 12.0 character, shortname, and codepoints.
Allmoji now supports all twemoji emojis and provides a tiny library for
looking up specific emojis by shortname. 

This document exists because the standard for shortnames is a problem. There are too many deviations and variations of the same emoji with a different name. 90% of the emoji libraries out there are out of date. This document aims to maintain a consistent naming scheme as well as support all future emojis, including the upcoming emoji 13.0 2020 release. All of the data in this document was scraped from emojipedia. I merely put it into a format exclusively for developers. You will find that keys are shortnames for quick lookup, and codepoints and the emoji's character as values. Should you require any other attributes, don't hesitate to inform me.

## API

Returns the emoji's hex character, shortname and image as a JSON object.

```javascript
Allmoji.Get( shortname );
```

Returns the emoji's Unicode character as a string.

```javascript
Allmoji.GetChar( shortname );
```

Returns all of the emoji's codepoints as an array of strings. 

```javascript
Allmoji.GetCodePoints( shortname );
```

Returns the emoji's twemoji image relative to the given path and extension.
If you've changed the folder names, this will just be the folder's name.

```javascript
Allmoji.GetImg( shortname, path, ext );
```

Examples:

```javascript
let eggplant = Allmoji.GetImg( "eggplant", "72x72/", ".png" );
let taco     = Allmoji.GetImg( "eggplant", "svg/", ".svg" );
let cry      = Allmoji.GetImg( "crying_face", "ai/", ".ai" );
```
