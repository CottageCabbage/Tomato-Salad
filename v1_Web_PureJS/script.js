var timerStatus;

var timer;
var seconds;
var minutes;
var hours;
var displayTime;
var restTimer;





function StartTimer() {
	alert('HEY')
	timerStatus = 'working';
	timer = document.getElementById('workTimer').value;
	timer = timer.split(":");
	hours = timer[0];
	minutes = timer[1];
	seconds = timer[2];

	if (seconds < 60 & minutes < 60) {
		intervalID = setInterval(TheTimer, 1000);		
	} else {
		alert('Make sure your minute and second values are below 60! hh:59:59')
	}
	document.getElementById('workTimer').disabled = true;
	document.getElementById('restTimer').disabled = true;
	document.getElementById('loopTimes').disabled = true;
	document.getElementById('start').disabled = true;
}


function TheTimer() {
	if (seconds > 0) {
		seconds--;
	}
	else if (seconds == 0) {
		if (minutes > 0) {
			minutes--;
			seconds+=60;
		}
		else if (minutes == 0) {
			if (hours > 0) {
				hours--;
				minutes+=60;
			}
			else if (hours == 0) {
				alert('Timer out');
				clearInterval(intervalID);

				if (timerStatus == 'working') {
					let startRest = confirm('Start rest timer?');
					if (startRest == true) {
						startRestTimer();
					}
				} 
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