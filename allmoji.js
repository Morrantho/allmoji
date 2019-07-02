const fs = require("fs");
var Allmoji = {};
Allmoji.data = JSON.parse( fs.readFileSync("allmoji.json") );
Allmoji.Get = function( key )
{
	return this.data[key];
}
Allmoji.GetChar = function( key )
{
	return this.data[ key ].character;
}
Allmoji.GetCodePoints = function( key )
{
	return this.data[ key ].codepoints;
}
Allmoji.GetImg = function( key, path, ext )
{
	return path+this.data[ key ].img+ext;
}
module.exports = Allmoji;