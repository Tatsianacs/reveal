Reveal.addEventListener( 'fragmentshown', function( event ) { 
    if(event.fragment.id === 'bp30') { 
        event.fragment.classList.add("animation");
    }
} );

Reveal.addEventListener( 'fragmenthidden', function( event ) {
    if(event.fragment.id === 'bp30') { 
        event.fragment.classList.remove("animation");
    }
} );