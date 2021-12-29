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
	// TO-DO: Make the "check if working or resting its own function"
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

				}
			}
		}
		console.log(hours, minutes, seconds);
		updateTimer();
	}

// CHECK TIMER STATUS (WORK, REST, LONG REST)
	function checkTimerStatus() {

		if (timerStatus == 'working') {
			loopsComplete += 1;
			updateLoopCount();
			// If loops completed is equal to loops wanted, end everything
			if (loopsComplete == loops) {
				if (longBreaksEnabled == true) {
					startLongBreak();
				} else {
					alert('Congratulations, you have finished your loops!');					
				}

			}
			// Otherwise,
			else if (loopsRan < loops) {


			}
		}
	}

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