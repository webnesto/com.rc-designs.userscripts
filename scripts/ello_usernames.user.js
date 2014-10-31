// ==UserScript==
// @name           Ello - Display Usernames
// @description    Usernames for Ello
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
	".script-username-label" : [
		"font-size:0.6rem;"
	,	"clear:both;"
	]
};

for( var rule in styles ){
	GM_addStyle( rule + "{" + styles[ rule ].join( "" ) + "}" );
}

addJQuery( function(){
	setInterval(function() {

		function handleUpdate( uname, $this, where ) {
			if( !$this.hasClass("script-processed")){
				$this[ where ]( '<div class="script-username-label">' + uname + '</div>' );
				$this.addClass("script-processed");
			}
			//else - do nothing
		}

		$('.posts .avatar').each( function(){
			var $this = $( this );
			handleUpdate(  $this.attr('title'), $this.closest(".post").find( ".post-content" ), "prepend" );
		} );

		//todo: alphabetise the avatars first.
		$('#drawer .avatar').each( function(){
			var $this = $( this );
			handleUpdate(  $this.attr('title'), $this, "before" );
		} );

	}, 5000);
});