function checkValues_startTimer(seconds, minutes) {
	if (seconds < 60 & minutes < 60) {
		intervalID = setInterval(TheTimer, 1000);
	} else {
		alert('There seems to be an error. Please make sure your timer values are in the format hh:mm:ss');
		document.getElementById('workTimer').disabled = false;
		document.getElementById('restTimer').disabled = false;
		document.getElementById('loops').disabled = false;
		document.getElementById('start').disabled = false;
	}
}

function ResetTimer() {
	// Make everything zero
	clearInterval(intervalID);
	hours = 0; minutes = 0; seconds = 0;
	console.log(hours, minutes, seconds);
	document.getElementById('timerPlace').innerHTML = '00:00:00';
	// Enable everything back again
	document.getElementById('workTimer').disabled = false;
	document.getElementById('restTimer').disabled = false;
	document.getElementById('loops').disabled = false;
	document.getElementById('start').disabled = false;
}







// SETTINGS // 
	// function closeSettings() {
	// 	var displayStatus = document.getElementById('settings');
	// 	displayStatus.style.display = 'none';
	// }

	// function openSettings() {
	// 	var displayStatus = document.getElementById('settings');
	// 	displayStatus.style.display = 'flex';
	// }

	// /* LONG BREAKS */
	// longBreaksEnabled = document.getElementById('enableLongBreaks');
	// // Called with onChange()
	// function longBreaksCheckbox() {
	// 	if (longBreaksEnabled.checked) {
	// 		console.log('Long breaks are enabled');
	// 		document.getElementById('longRestTimer').style.display = 'block';
	// 	} else {
	// 		console.log('Long breaks are disabled')
	// 		document.getElementById('longRestTimer').style.display = 'BLOCK'; // CHANGE LATER
	// 	}	
	// }
	// // So that state updates with page reload
	// longBreaksCheckbox()

	// /* NIGHT MODE */
	// nightModeEnabled = document.getElementById('enableNightMode')

	// function nightModeCheckbox() {
	// 	if (enableNightMode.checked) {
	// 		changeStyle('themes/night.css')
	// 	} else {
	// 		changeStyle('themes/day.css')
	// 	}
	// }

	// function changeStyle(styleSheet) {
	// 	styleSheets = document.getElementsByTagName('link');
	// 	styleSheets[1].href = styleSheet;
	// }
		
	// nightModeCheckbox()