$( '.dropdown-menu .dropdown-submenu a' ).click( function( e ) {
	$( this ).parent( '.dropdown-submenu' ).toggleClass( 'open' );
	e.stopPropagation();
});
