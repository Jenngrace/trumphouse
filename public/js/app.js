/* 
 * app.js, code for Trumphouse game.
 * Module pattern.
 * MVC pattern.
 * "Fart in the Elevator" pattern.
 */


var game = ( function () {

	var trump = {};  // object, trump character

	var bricks = []; // array of objects

	var arena = {};  // object, entire game canvas

	return {
		trump: trump,
		bricks: bricks,
		arena: arena
	};

} ) (); // the '()' causes this function to execute instantly


console.log( 'in app.js' ); // debugging line