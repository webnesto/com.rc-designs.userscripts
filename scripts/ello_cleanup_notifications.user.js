// ==UserScript==
// @name           Ello - Cleanup Notifications
// @description    Removes icons in notifications, scales it to fill the whole panel
// @include        https://ello.co/*
// @version        1.0
// ==/UserScript==


var styles = {
	'.notification__avatar, .notification__icon' : [
		'display:none;'
	]
,	'.notification--with-post .notification__body, .notification__body' : [
		'width:100%;'
	,	'max-width:100%;'
	,	'margin:0px;'
	]
,	'.js-friend-count, .js-noise-count' : [
		'top: 1rem;'
	,	'position: relative;'
	,	'right: -1rem;'
	]
};

for( var rule in styles ){
	GM_addStyle( rule + "{" + styles[ rule ].join( "" ) + "}" );
}
