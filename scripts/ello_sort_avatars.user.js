// ==UserScript==
// @name           Ello - Sort Avatars Alphabetically
// @description    Ello - Sort Avatars Alphabetically
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

GM_addStyle( '.layout-mode .toolbar--open .toolbar, .layout-mode .drawer { width: 23.625rem; }' );
GM_addStyle( '.script-avatar-alphabet { position: fixed; left: 4%; width: 91%; top: 66px; letter-spacing: -1px; }' );
GM_addStyle( '.script-avatar-letter { background-color: #e5e5e5; margin-top: 2em; }' );


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