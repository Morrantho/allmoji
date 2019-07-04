# allmoji
A JSON document containing every emoji 12.0 character, shortname, and codepoints.
Allmoji now supports all twemoji emojis and provides a tiny library for
looking up specific emojis by shortname. 

This document exists because the standard for shortnames is a problem. There are too many deviations and variations of the same emoji with a different name. 90% of the emoji libraries out there are out of date. This document aims to maintain a consistent naming scheme as well as support all future emojis, including the upcoming emoji 13.0 2020 release. All of the data in this document was scraped from emojipedia. I merely put it into a format exclusively for developers. You will find that keys are shortnames for quick lookup, and codepoints and the emoji's character as values. Should you require any other attributes, leave your request below.

## What makes allmoji different from other emoji libraries such as emojilib or even twemoji?

Fair question. Allmoji gives you the emoji's Unicode character, all its codepoints in hex and the associated twemoji image as hex. What does this do for me? 

## Lets compare to emojilib
emojilib does not give you hex or codepoints. It merely gives you the emoji's unicode character which must later be converted to hex in order to retrieve it's associated .png, .svg or .ai image from twemoji. Allmoji accounts for all unicode-to-hex conversions ahead of time, reducing runtime cost. This means Allmoji has the ability to yield a constant-time lookup.

## Lets compare to Twemoji

Twemoji's API does not offer parsing an emoji by its shortname because it doesn't support shortnames, but rather codepoints and unicodes to resolve an emoji. Using twemoji, you need the emoji's unicode or codepoints for it to parse the emoji. If you don't  have this information, it can be difficult to work with. What if you only had emoji shortnames and needed to work on an app that supports emoji autocompletion? How would you handle that? Write a giant JSON document that contains ALL emoji shortnames, where the values are the associated twemoji image? Well, enter allmoji. 

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
let taco     = Allmoji.GetImg( "taco", "svg/", ".svg" );
let cry      = Allmoji.GetImg( "crying_face", "ai/", ".ai" );
```
