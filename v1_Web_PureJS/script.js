

function closeSettings() {
	var displayStatus = document.getElementById('settings');
	displayStatus.style.display = 'none';
}

function openSettings() {
	var displayStatus = document.getElementById('settings');
	displayStatus.style.display = 'flex';
}


/* LONG BREAKS */
longBreaksEnabled = document.getElementById('enableLongBreaks');
// Called with onChange()
function longBreaksCheckbox() {
	if (longBreaksEnabled.checked) {
		console.log('Long breaks are enabled');
		document.getElementById('longRestTimer').style.display = 'block';
	} else {
		console.log('Long breaks are disabled')
		document.getElementById('longRestTimer').style.display = 'BLOCK'; // CHANGE LATER
	}	
}
// So that state updates with page reload
longBreaksCheckbox()




/* NIGHT MODE */
nightModeEnabled = document.getElementById('enableNightMode')

function nightModeCheckbox() {
	if (enableNightMode.checked) {
		changeStyle('themes/night.css')
	} else {
		changeStyle('themes/day.css')
	}
}

function changeStyle(styleSheet) {
	styleSheets = document.getElementsByTagName('link');
	styleSheets[1].href = styleSheet;
}
	
nightModeCheckbox()