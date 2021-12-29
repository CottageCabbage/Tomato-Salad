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