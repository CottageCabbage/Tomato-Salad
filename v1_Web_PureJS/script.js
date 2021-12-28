var timerStatus;
var loops;
var loopsRan;
loopsRan = 0;

var timer;
var seconds;
var minutes;
var hours;
var displayTime;
var restTimer;



function StartTimer() {
	// Configure Timer
	loops = document.getElementById('loopTimes').value;
	timerStatus = 'working';
	console.log(timerStatus)
	// Get paramethers
	timer = document.getElementById('workTimer').value;
	timer = timer.split(":");
	hours = timer[0];
	minutes = timer[1];
	seconds = timer[2];
	// Check if value is valid, then start timer through Interval
	if (seconds < 60 & minutes < 60) {
		intervalID = setInterval(TheTimer, 1000);
	} else {
		alert('Make sure your minute and second values are below 60! hh:59:59')
	}
	// Disable all inputs & start button
	document.getElementById('workTimer').disabled = true;
	document.getElementById('restTimer').disabled = true;
	document.getElementById('loopTimes').disabled = true;
	document.getElementById('start').disabled = true;
}


function TheTimer() {
	// If seconds greater than zero, subtract by 1
	if (seconds > 0) {
		seconds--;
	}
	// If seconds equal to zero and minutes greater than zero, subtract minutes by 1, make seconds equal 60
	else if (seconds == 0) {
		if (minutes > 0) {
			minutes--;
			seconds+=60;
		}
		// If minutes equal to zero and hours greater than zero, subtract hours by 1, make minutes equal 60
		else if (minutes == 0) {
			if (hours > 0) {
				hours--;
				minutes+=60;
			}
			// Otherwise, end timer.
			else if (hours == 0) {
				alert('Timer out');
				clearInterval(intervalID);
				// If in work mode, 
				if (timerStatus == 'working') {
					loopsRan += 1;
					updateLoopCount()
					// check if loops done equals to amount wanted. If so, alert()
					if (loopsRan == loops) {
						alert("You have finished your loops.");
					}
					// Else, if loopsRan smaller than loops, prompt for restTimer
					else if (loopsRan < loops) {
						
						let startRest = confirm('Start rest timer?');
						if (startRest == true) {
							startRestTimer();
						}
					}
				} 
				// If in resting mode,
				else if (timerStatus == 'resting') {
					let startWorking = confirm('Breaktime is over, start work?');
					if (startWorking == true) {
						StartTimer();
					}
				}
			}
		}
	}
	console.log(hours, minutes, seconds);

	updateTimer();

}

function updateTimer() {
	displayTime = hours + ':';
	if ((minutes+'').length == 1) {
		displayTime = displayTime + '0' + minutes + ':';
	} else {displayTime += minutes + ':'}

	if ((seconds+'').length == 1) {
		displayTime = displayTime + '0' + seconds;
	} else {displayTime += seconds}

	document.getElementById('timerPlace').innerHTML = displayTime;
}


function updateLoopCount() {
	document.getElementById('displayLoopsHere').innerHTML = 'Loops Completed:' + loopsRan + '/' + loops;
}

function ResetTimer() {

	clearInterval(intervalID);
	hours = 0; minutes = 0; seconds = 0;
	console.log(hours, minutes, seconds);

	document.getElementById('timerPlace').innerHTML = hours + ':' + minutes + ':' + seconds;
	document.getElementById('workTimer').attributes.removeNamedItem('disabled');
	document.getElementById('start').attributes.removeNamedItem('disabled');
}



function startRestTimer() {
	timerStatus = 'resting';
	console.log(timerStatus)
	restTimerValue = document.getElementById('restTimer').value;
	restTimerValue = restTimerValue.split(":");
	
	hours = restTimerValue[0];
	minutes = restTimerValue[1];
	seconds = restTimerValue[2];

	if (seconds < 60 & minutes < 60) {
		intervalID = setInterval(TheTimer, 1000);		
	} else {
		alert('Make sure your minute and second values are below 60! hh:59:59')
	}
}

// https://stackoverflow.com/questions/457826/pass-parameters-in-setinterval-function
// https://stackoverflow.com/questions/21277900/how-can-i-pause-setinterval-functions
// https://stackoverflow.com/questions/7279567/how-do-i-stop-a-window-setinterval-in-javascript/7282347#7282347
// https://stackoverflow.com/questions/7279567/how-do-i-stop-a-window-setinterval-in-javascript
// https://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer


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
		document.getElementById('longRestTimer').style.display = 'none';
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