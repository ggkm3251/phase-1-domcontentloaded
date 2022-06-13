// Your code goes here
/*document.querySelector( 'p' ).textContent

const event = document.createEvent( 'Event' );
    event.initEvent( 'DOMContentLoaded', true, true );
    window.document.dispatchEvent( event )*/
    
document.addEventListener( "DOMContentLoaded", function () {
  changeText()
} );


function changeText() {
  document.getElementById( "text" )
    .innerHTML = "This is really cool!";
}    