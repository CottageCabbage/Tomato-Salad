let default_tab = 'timer-values-inputs-container';



function swap_tabs(leaving, entering) { // CHANGE LATER, MAKE IT PRETTY ~~~
	document.getElementById(leaving).style.display = 'none';
	document.getElementById(entering).style.display = 'flex';
}


document.getElementById("confirm-values").addEventListener("click", check_if_values_valid);


// Open Preset Timers Tab
document.getElementById("preset-timer-values-button").addEventListener(
	"click", 
	function() {swap_tabs('timer-values-inputs-container','preset-timers-container')}, 
	false
);

// Open Settings
document.getElementById("open-settings-button").addEventListener(
	"click", 
	function() {
		swap_tabs('timer-values-inputs-container','settings-container');
		// x = document.getElementById('setting-icon').getAttribute('d');
		document.getElementById('setting-icon').setAttribute('d', 
			'M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0\
			 110 2H7.414l2.293 2.293a1 1 0 010 1.414z');

		document.getElementById('open-settings-button').id = 'go-back-button';
	}, 
	false
);

// Close Settings
document.getElementById("go-back-button").addEventListener(
	"click", 
	function() {
		swap_tabs('settings-container', 'timer-values-inputs-container');
		// x = document.getElementById('setting-icon').getAttribute('d');
		document.getElementById('setting-icon').setAttribute('d', 
			'M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 \
			4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 \
			1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z');

		document.getElementById('go-back-button').id = 'open-settings-button';
	}, 
	false
);

