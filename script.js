var timer;
var seconds;
var minutes;
var hours;
var displayTime;

function StartTimer() {
	timer = document.getElementById('inputTime').value;
	timer = timer.split(":");
	hours = timer[0];
	minutes = timer[1];
	seconds = timer[2];

	if (seconds < 60 & minutes < 60) {
		intervalID = setInterval(TheTimer, 1000);		
	} else {
		alert('Make sure your minute and second values are below 60! hh:59:59')
	}
	document.getElementById('inputTime').disabled = true;
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
			}
		}
	}
	console.log(hours, minutes, seconds);

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
	document.getElementById('inputTime').attributes.removeNamedItem('disabled');
	document.getElementById('start').attributes.removeNamedItem('disabled');
}
