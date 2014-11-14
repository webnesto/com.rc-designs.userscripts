// ==UserScript==
// @name           Ello - Sort Avatars Alphabetically
// @description    Ello - Sort Avatars Alphabetically
// @include        https://ello.co/*
// @version        1.2
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
	".layout-mode .toolbar--open .toolbar, .layout-mode .drawer" : [
		"max-width: 23.625rem;"
	]
,	".script-avatar-alphabet" : [
		"position: fixed;"
	,	"left: 4%;"
	,	"width: 91%;"
	,	"top: 66px;"
	,	"letter-spacing: -1px;"
	]
,	".script-avatar-letter" : [
		"background-color: #e5e5e5;"
	,	"margin-top: 2em;"
	]
,	".script-avatar-alphabet a" : [
		"display: block;"
	,	"float: left;"
	,	"width: 3.846%;"
	]
	//skinny layout:
,	"@media (max-width: 71.1875em) and (min-width: 45em) { .script-avatar-alphabet" : [
		"top: 233px;"
	,	"}" //close the media query
	]
};

for( var rule in styles ){
	GM_addStyle( rule + "{" + styles[ rule ].join( "" ) + "}" );
}

addJQuery( function(){
	var alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var links = "";
	var $peops = $( "#peops" );
	var i, l;
	var letter;

	for( i = 0, l = alpha.length; i < l; i++ ){
		letter = alpha.charAt( i );
		links+='<a href="#script-' + letter + '">' + letter + '</a> ';
	}

	var $sorted = $peops.children().sort( function( lhs,rhs ){
		return $( lhs ).attr('data-username').localeCompare( $( rhs ).attr( 'data-username' ) );
	} );
	
	$peops.html("");

	$peops.append( '<li class="script-avatar-alphabet" >' + links + '</li>' );

	for( i = 0, l = alpha.length; i < l; i++ ){
		letter = alpha.charAt( i );
		$peops.append( '<li class="script-avatar-letter" data-letter="' + letter + '"><a name="script-' + letter + '"></a>' + letter + '</li>');
	}

	$sorted.each( function( i, el ){
		var firstletter = $( el ).attr( 'data-username' ).charAt( 0 ).toUpperCase();
		$peops.find( 'li[data-letter="' + alpha[ alpha.indexOf( firstletter ) + 1 ] + '"]' ).before( el );
	} );

});
