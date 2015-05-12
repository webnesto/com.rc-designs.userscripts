// ==UserScript==
// @name           MightyText - UI Improvments
// @description    MightyText - UI Improvments
// @include        https://mightytext.net/*
// @version        1.15
// ==/UserScript==

a function that loads jQuery and calls a callback function when jQuery has finished loading
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
	"#logo, .newSMSLabel, .iconLabel, #goProWrapper, #alert-bottom-right-corner, #heart-mt-button, #messageViewToggle, #share-button-main, .scheduleSelector.btn, .templateDropUpIcon, #events" : [
		"display: none !important;"
	]
,	"#sideNavigation" : [
		"width: 10%;"
	]
,	"#pinnedContent" : [
		"left: 10%;"
	,	"width: 90%;"
	,	"min-width: 0;"
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
,	"#singleMessageContainer .textResponse" : [
		"width: 80%;"
	]
,	"#singleMessageContainer .save-draft-button-holder" : [
		"width: 13px;"
	,	"right: 10px;"
	]
,	".save-draft-button-holder" : [
		"border: 1px solid rgba(128, 128, 128, 0.6);"
	,	"border-radius: 2px;"
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
,	"#navBarTabs li.active a" : [
		"width: 100%;"
	]
,	".thread-tab img" : [
		"width: 20%;"
	,	"max-width: 45px;"
	,	"height: 20%;"
	,	"border-radius: 50%;"
	,	"margin: 5px 2%;"
	]
,	".threadNameOrNumber" : [
		"width: 60%;"
	,	"margin-left: 0;"
	]
,	".msgCountAndTimeStampInTab" : [
		"width: 15%;"
	,	"position: absolute;"
	,	"right: 1%;"
	,	"top: 5px;"
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


var csses = [];

for( var rule in styles ){
	var css = rule + "{" + styles[ rule ].join( "" ) + "}";
	if (typeof GM_addStyle !== "undefined") {
		GM_addStyle(css);
	} else if (typeof PRO_addStyle !== "undefined") {
		PRO_addStyle(css);
	} else if (typeof addStyle !== "undefined") {
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

function keyCheck(e){
	if( e.altKey){
		var kc = e.keyCode;
		switch( kc ){
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
				var index = kc - 49;

				$( "#navBarTabs li a").eq( index ).click();
			break;
			default:
			//do nothing
		}
	}
}



addJQuery( function(){
	

});
