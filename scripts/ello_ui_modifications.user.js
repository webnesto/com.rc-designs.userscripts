// ==UserScript==
// @name           Ello - UI Modifications
// @description    Ello - Various UI mods to improve UX for me
// @include        https://ello.co/*
// @version        1.0
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
	]
,	".comments .comment .comment_header" : [
		"top: 1em;"
	,	"left: 1em;"
	]
,	".comments .comment:nth-child(odd)" : [
		"background-color: #eaeaea;"
	]
};

for( var rule in styles ){
	GM_addStyle( rule + "{" + styles[ rule ].join( "" ) + "}" );
}

addJQuery( function(){
	

});
