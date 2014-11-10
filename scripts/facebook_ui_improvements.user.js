// ==UserScript==
// @name           Facebook - UI Improvments
// @description    Facebook - UI Improvments
// @include        https://www.facebook.com/*
// @version        1.1
// ==/UserScript==

// a function that loads jQuery and calls a callback function when jQuery has finished loading
// function addJQuery(callback) {
//   var script = document.createElement("script");
//   script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
//   script.addEventListener('load', function() {
//     var script = document.createElement("script");
//     script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
//     document.body.appendChild(script);
//   }, false);
//   document.body.appendChild(script);
// }

var styles = {
	//icons
	'#blueBarNAXAnchor' : [
		"background: #333333;"
	]
,	'a.jewelButton[name="requests"]' : [
		"background-position: 0 -511px;"
	]
,	'a.jewelButton[name="mercurymessages"]' : [
		"background-position: 0 -320px;"
	]
,	'a.jewelButton[name="notifications"]' : [
		"background-position: 0 -607px;"
	]
,	'#privacyFlyoutLabel' : [
		"background-position: -34px -370px;"
	]
,	'#userNavigationLabel' : [
		"background-position: -252px -100px;"
	]
	//links
,	'a': [
		"color: #350B1D;"
	]
};

for( var rule in styles ){
	GM_addStyle( rule + "{" + styles[ rule ].join( "" ) + "}" );
}


// addJQuery( function(){
	

// });