// TIMERS
	// WORK
		function workTimer() {
			loops = document.getElementById('loops').value;
			timerStatus = 'working';
			console.log(timerStatus);
			// Get values
			timer = document.getElementById('workTimer').value;
			timer = timer.split(":");
			hours = timer[0];
			minutes = timer[1];
			seconds = timer[2];	
			// Check if value is valid, if so, start timer. Otherwise, alert.
			checkValues_startTimer(seconds, minutes);
			// Disable all inputs & start button
			document.getElementById('workTimer').disabled = true;
			document.getElementById('restTimer').disabled = true;
			document.getElementById('loops').disabled = true;
			document.getElementById('start').disabled = true;
		}
	// REST
		function restTimer() {
			timerStatus = 'resting';
			console.log(timerStatus);
			// Get Values
			timer = document.getElementById('restTimer').value;
			timer = timer.split(":");
			hours = timer[0];
			minutes = timer[1];
			seconds = timer[2];		
			// Check if value is valid, if so, start timer. Otherwise, alert.
			checkValues_startTimer(seconds, minutes);	
		}
	// LONG BREAKS
		function longRestTimer() {
			timerStatus = 'longRest';
			console.log(timerStatus);
			// Get Values
			timer = document.getElementById('longRestTimer').value;
			timer = timer.split(":");
			hours = timer[0];
			minutes = timer[1];
			seconds = timer[2];		
			// Check if value is valid, if so, start timer. Otherwise, alert.
			checkValues_startTimer(seconds, minutes);	
		}