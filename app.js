const state = {
	winState: false,
	tokenState: true,
	cellId: []
};


// State modification functions
function placeToken() {
	if (tokenStateX === false) {
		${target}.html('O'); 
		state.tokenStateX = true;
	} else {
		$(target).html('X');
		tokenStateX = false;
	}
}



function resetGameBoard() {

}

// Render functions
function render() {

}	

// Event Listeners

$('.game').on('click', '.cell', function(event) {
		const cell = $(this).attr('id');
		
	});

