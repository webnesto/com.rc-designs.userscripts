// ==UserScript==
// @name           Ello - UI Modifications
// @description    Ello - Various UI mods to improve UX for me
// @include        https://ello.co/*
// @version        1.12
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
	//improve comment display
	".comment__editor+.comments" : [
		"max-width: 615px;"
	]
,	".comments .comment" : [
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
,	".comments .comment:last-child" : [
		"border-bottom: 1px dotted #eaeaea;"
	]
,	".post-comment__avatar a, .comment__avatar a, .comment__avatar--anon" : [
		"width: 2rem;"
	,	"height: 2rem;"
	,	"border-radius: 50%;"
	]
,	".comment__body p:last-child, .comment__body p:nth-last-child(2), .comment__body img:last-child, .comment__body img:nth-last-child(2)" : [
		"margin-bottom: 0 !important;"
	]
,	".comment__actions" : [
		"position: absolute;"
	,	"right: 1em;"
	,	"bottom: 1em;"
	]
,	".comment__body, .comment__avatar a:after" : [
		"left: 0;"
	,	"padding-left: 2.8125rem;"
	,	"max-width: 400px;"
	]
,	".comment-editor--focused .editor__actions" : [
		"height: 2rem;"
	,	"bottom: -2rem;"
	]
,	".js-comment-btn.js-submit" : [
		"height: 2rem;"
	,	"line-height: 1rem;"
	]
,	".btn--ico span" : [
		"line-height: 2rem;"
	]
,	".btn--ico .svgicon" : [
		"height: 2rem;"
	]
};

for( var rule in styles ){
	GM_addStyle( rule + "{" + styles[ rule ].join( "" ) + "}" );
}

// addJQuery( function(){
	

// });
