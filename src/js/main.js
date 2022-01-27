// // GLOBAL VARIABLES
// 	let timer_status = 'work'; // 'work', 'short-breat' 'long-break'
// 	// Timer values
// 	let work_timer;
// 	let short_break_timer;
// 	let long_break_timer;
// 	let loops;
// 	let loops_complete = 0;
// 	// Reference Variables?
// 	let TIME_LIMIT;
// 	let timePassed = 0;
// 	let timeLeft = TIME_LIMIT;
// 	let timerInterval = null;


// // FUNCTIONS
// document.getElementById("start-timer-button").addEventListener("click", check_if_values_valid);

// function update_loops_label() {
// 	document.getElementById('loops-completed-label').innerHTML = loops_complete + '/' + loops;
// }

// function get_inputs() {
// 	work_timer = parseInt(document.getElementById('work-input').value);
// 	short_break_timer = parseInt(document.getElementById('short-break-input').value);
// 	long_break_timer = parseInt(document.getElementById('long-break-input').value);
// 	loops = parseInt(document.getElementById('loops-input').value);
// }

// function check_if_values_valid() {
// 	get_inputs()

// 	// Check if everything above 0
// 	if ((work_timer > 0) && (short_break_timer > 0) && (long_break_timer > 0) && (loops > 0)) {
// 		swap_tabs('timer-values-inputs-container', 'timer-display-container');

// 		TIME_LIMIT = work_timer + 1;
// 		startTimer()
// 	} else {
// 		alert('Values should be Integers above 0');
// 	}
// }



// // Credit: Mateusz Rybczonec
// 	// Colors, not sure I'll use them
// 		const FULL_DASH_ARRAY = 283;
// 		const WARNING_THRESHOLD = 10;
// 		const ALERT_THRESHOLD = 5;

// 		const COLOR_CODES = {
// 			info: {
// 				color: "green"
// 			},
// 			warning: {
// 				color: "orange",
// 				threshold: WARNING_THRESHOLD
// 			},
// 			alert: {
// 				color: "red",
// 				threshold: ALERT_THRESHOLD
// 			}
// 		};
// 		// let remainingPathColor = COLOR_CODES.info.color;


// function onTimesUp() {
// 	clearInterval(timerInterval);
// 	switch (timer_status) {
// 		case 'work':
// 			loops_complete += 1;
// 			update_loops_label();
// 			if (loops_complete < loops) {
// 				callTimer('start-short-break');
// 			} else {
// 				callTimer('start-long-break');
// 			}
// 			break;

// 		case 'short-break':
// 			callTimer('start-work');
// 			break;

// 		case 'long-break':
// 			console.log('long break finished. Pomodoro finished')
// 	}	
// }

// function callTimer(next_timer) {
// 	switch (next_timer) {
// 		case 'start-work':
// 			// RESET VARIABLES
// 			timer_status = 'work';
// 			TIME_LIMIT = work_timer + 1;
// 			timePassed = 0;
// 			timeLeft = TIME_LIMIT;
// 			timerInterval = null;
// 			// Start
// 			startTimer();
// 			break;

// 		case 'start-short-break':
// 			console.log('beep boop');
// 			// RESET VARIABLES
// 			timer_status = 'short-break';
// 			TIME_LIMIT = short_break_timer + 1;
// 			timePassed = 0;
// 			timeLeft = TIME_LIMIT;
// 			timerInterval = null;
// 			// Start
// 			startTimer();
// 			break;

// 		case 'start-long-break':
// 			console.log('boop beep');
// 			// RESET VARIABLES
// 			timer_status = 'long-break';
// 			TIME_LIMIT = long_break_timer + 1;
// 			timePassed = 0;
// 			timeLeft = TIME_LIMIT;
// 			timerInterval = null;
// 			// Start
// 			startTimer();
// 			break;
// 	}
// }


// function startTimer() {
// 	update_loops_label();
// 	timerInterval = setInterval(() => {
// 		timePassed = timePassed += 1;
// 		timeLeft = TIME_LIMIT - timePassed;
// 		document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
// 		setCircleDasharray();
// 		// setRemainingPathColor(timeLeft);

// 		// End Timer
// 		if (timeLeft === 0) {
// 			onTimesUp();
// 		}

// 	}, 1000);

// }

// function formatTime(time) {
// 	const minutes = Math.floor(time / 60);
// 	let seconds = time % 60;

// 	if (seconds < 10) {
// 		seconds = `0${seconds}`;
// 	}
// 	return `${minutes}:${seconds}`;
// }

// // Update timer colors, don't think I need?
// // function setRemainingPathColor(timeLeft) {
// // 	const { alert, warning, info } = COLOR_CODES;
// // 	if (timeLeft <= alert.threshold) {
// // 		document.getElementById("base-timer-path-remaining").classList.remove(warning.color);

// // 		document.getElementById("base-timer-path-remaining").classList.add(alert.color);
// // 	} else if (timeLeft <= warning.threshold) {
// // 		document.getElementById("base-timer-path-remaining").classList.remove(info.color);
// // 		document.getElementById("base-timer-path-remaining").classList.add(warning.color);
// // 	}
// // }

// function calculateTimeFraction() {
// 	const rawTimeFraction = timeLeft / TIME_LIMIT;
// 	return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
// }

// function setCircleDasharray() {
// 	const circleDasharray = `${(calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)} 283`;
// 	document.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray", circleDasharray);
// }


// // function ResetTimer() {
// // 	// Make everything zero
// // 	clearInterval(intervalID);
// // 	hours = 0; minutes = 0; seconds = 0;
// // 	console.log(hours, minutes, seconds);
// // 	document.getElementById('timerPlace').innerHTML = '00:00:00';
// // 	// Enable everything back again
// // 	document.getElementById('workTimer').disabled = false;
// // 	document.getElementById('restTimer').disabled = false;
// // 	document.getElementById('loops').disabled = false;
// // 	document.getElementById('start').disabled = false;
// // }


// function pause_timer() {
// 	console.log("HEllo")
// }