// ==UserScript==
// @name           Ello - UI Modifications
// @description    Ello - Various UI mods to improve UX for me
// @include        https://ello.co/*
// @version        1.4
// ==/UserScript==

// a function that loads jQuery and calls a callback function when jQuery has finished loading
function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

var styles = {
	//improve comment display
	".comments .comment" : [
		"padding: 1em;"
	,	"margin-top: 0;"
	]
,	".comments .comment .comment__header" : [
		"top: 1em;"
	,	"left: 1em;"
	]
,	".comments .comment:nth-child(odd)" : [
		"background-color: #eaeaea;"
	]
,	".post-comment__avatar a, .comment__avatar a, .comment__avatar--anon" : [
		"width: 2.75rem;"
	,	"height: 2.75rem;"
	,	"border-radius: 50%;"
	]
,	".post p:last-child, .post img:last-child" : [
		"margin-bottom: 0;"
	]
,	".comment__actions" : [
		"position: absolute;"
	,	"right: 0;"
	,	"bottom: 1em;"
	]
};

for( var rule in styles ){
	GM_addStyle( rule + "{" + styles[ rule ].join( "" ) + "}" );
}

addJQuery( function(){
	

});
