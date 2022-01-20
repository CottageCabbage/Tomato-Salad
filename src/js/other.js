function swap_tabs(leaving, entering) { // CHANGE LATER, MAKE IT PRETTY ~~~
	document.getElementById(leaving).style.display = 'none';
	document.getElementById(entering).style.display = 'flex';
}


document.getElementById("confirm-values").addEventListener("click", check_if_values_valid);


document.getElementById("pomodoro-preset-test").addEventListener("click", 
	function() {
		console.log('hello')
		work_timer = 25; short_break_timer = 5; long_break_timer = 15; loops = 4;
		check_if_values_valid;
		swap_tabs('preset-timers-container', 'timer-display-container')
	}, 
	false
);




document.getElementById("preset-timer-values-button").addEventListener(
	"click", 
	function() {swap_tabs('timer-values-inputs-container','preset-timers-container')}, 
	false
);


// document.getElementById("nodeGoto").addEventListener("click", function() {
// 	swap_tabs
// }, false);