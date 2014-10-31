// ==UserScript==
// @name           MightyText - UI Improvments
// @description    MightyText - UI Improvments
// @include        https://mightytext.net/*
// @version        1.7
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
	"#logo, .newSMSLabel, .iconLabel, #goProWrapper, #alert-bottom-right-corner" : [
		"display: none !important;"
	]
,	"#sideNavigation" : [
		"width: 10%;"
	]
,	"#pinnedContent" : [
		"left: 10%;"
	,	"width: 90%;"
	]
,	"#threadListHolder" : [
		"width: 30%;"
	]
,	"#singleMessageContainer" : [
		"width: 70%;"
	]
,	"#singleMessageContainer .messageThread" : [
		"width: 100%;"
	]
,	".newbatterywrap" : [
		"width: 44px;"
	]
,	".batwrap" : [
		"width: 46px;"
	]
,	"#newSms" : [
		"background-position: 1px 4px;"
	,	"padding: .5em 0;"
	]
,	"#logo" : [
		"width: 100%;"
	,	"margin: 0;"
	]
,	"#navBarTabs > .active > a, #navBarTabs > .active > a:hover, #singleMessageContainer .contentPanelHeader, .contentPanelHeaderText" : [
		"background-color: #333333;"
	]
,	".sentText" : [
		"background-color: #bbbbbb;"
	]
,	".sentText:after" : [
		"border-left-color: #bbbbbb;"
	]
,	".alert" : [
		"top: 100px !important;"
	]
,	".sideBarIcon, #settingsIcon" : [
		"float: none !important;"
	,	"margin: auto;"
	]
,	".responseArea button" : [
		"background-color: #000000 !important;"
	]
,	".responseArea button:hover" : [
		"background-color: #555555 !important;"
	]
};

for( var rule in styles ){
	GM_addStyle( rule + "{" + styles[ rule ].join( "" ) + "}" );
}


addJQuery( function(){
	

});