// ==UserScript==
// @name          New Gmail - Alternating message colors
// @namespace     http://userstyles.org
// @description	  Makes messages in a message thread more distinguishable by alternating their background colors.
// @author        webnesto (inherited from: ) xat
// @include       http://mail.google.com/*
// @include       https://mail.google.com/*
// @include       http://*.mail.google.com/*
// @include       https://*.mail.google.com/*
// @run-at        document-start
// @version       1.0
// ==/UserScript==

var styles = {
	"div.h7:nth-of-type(odd) div.adn.ads,  div.kv:nth-of-type(odd)": [
		"background-color: rgba(0,0,255,0.05);"
	]
,	"div.kv div.G2": [
		"background-color: transparent !important;"
	]
};

var csses = [];

for( var rule in styles ){
	var css = rule + "{" + styles[ rule ].join( "" ) + "}";
	if (typeof GM_addStyle != "undefined") {
		GM_addStyle(css);
	} else if (typeof PRO_addStyle != "undefined") {
		PRO_addStyle(css);
	} else if (typeof addStyle != "undefined") {
		addStyle(css);
	} else {
		csses.push( css );
	}
}

if( csses.length ){
	var node = document.createElement("style");
	node.type = "text/css";
	for( var i=0, l=csses.length; i < l; i++ ){
		node.appendChild(document.createTextNode(csses[ i ]));
	}
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
