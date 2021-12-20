var setTime;
var seconds;
var minutes;
var hours;

function StartTimer() {
	timer = document.getElementById('inputTime').value;
	console.log(timer);
	timerTime = timer.split(":");
	setTime = [(timerTime[0]*1), (timerTime[1]*1), (timerTime[2]*1)];
	console.log(setTime);

	hours = setTime[0];
	minutes = setTime[1];
	seconds = setTime[2];
	intervalID = setInterval(TheTimer, 1000);
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
}