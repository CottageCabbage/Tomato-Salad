// VARIABLES
	// MISC
	var timerStatus; // Check if working, resting, longBreak 
	var loops; // Total of work-periods desired 
	var loopsComplete = 0; // Work-periods completed
	var longBreaksEnabled = false; // Check if longBreak Timer is active
	// TIMER
	var timer; // Values acquired through Inputs
	var seconds;
	var minutes;
	var hours;
	// ASD
	var displayTime;
	var restTimer;

// MAIN FUNCTION! 
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
					// then,
					checkTimerStatus()
				}
			}
		}
		console.log(hours, minutes, seconds);
		updateTimer();
	}

// CHECK TIMER STATUS (WORK, REST, LONG REST)
	function checkTimerStatus() {
		// If in working mode when timer ends:
		if (timerStatus == 'working') {
			loopsComplete += 1;
			updateLoopCount();
			// If loops completed is equal to loops wanted, end everything
			if (loopsComplete == loops) {
				if (longBreaksEnabled == true) { // Check if long breaks are enabled, if so, start one
					longBreak();
				} else {
					alert('Congratulations, you have finished your loops!');					
				}
			}
			// Otherwise, start normal rest timer
			else if (loopsRan < loops) {
				restTimer()
			}
		}
		// If in resting mode when timer ends: start work timer
		else if (timerStatus == 'resting') {
			workTimer()
		}
	}

// UPDATE HEADING TO SHOW TiMER VALUES
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

// UPDATE PARAGRAPH TO SHOW LOOPS and LOOPS COMPLETED
	function updateLoopCount() {
		document.getElementById('displayLoopsHere').innerHTML = 'Loops Completed:' + loopsRan + '/' + loops;
	}