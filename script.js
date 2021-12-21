var setTime;
var seconds;
var minutes;
var hours;

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
	document.getElementById('timerPlace').innerHTML = hours + ':' + minutes + ':' + seconds;
}


function ResetTimer() {
	clearInterval(intervalID);
	hours = 0; minutes = 0; seconds = 0;
	console.log(hours, minutes, seconds);
	document.getElementById('timerPlace').innerHTML = hours + ':' + minutes + ':' + seconds;
	document.getElementById('inputTime').attributes.removeNamedItem('disabled');
	document.getElementById('start').attributes.removeNamedItem('disabled');
}