// How should it work?

// Once inputs









let timer_status = 'work'; // 'work', 'shortBreat' 'longBreak'

// Timer
let work_timer;
let short_break_timer;
let long_break_timer;
let loops;
let loops_complete = 0;

function check_if_values_work() {
	work_timer = parseInt(document.getElementById('work-input').value);
	short_break_timer = parseInt(document.getElementById('short-break-input').value);
	long_break_timer = parseInt(document.getElementById('long-break-input').value);
	loops = parseInt(document.getElementById('loops-input').value);

	// CHANGE LATER, MAKE IT PRETTY ~~~
	if ((work_timer > 0) && (short_break_timer > 0) && (long_break_timer > 0) && (loops > 0)) {
		document.getElementById('timer-values-inputs-container').style.display = 'none'
		document.getElementById('timer-display-container').style.display = 'flex';

		TIME_LIMIT = work_timer /* *60 */;
		startTimer()
	} else {
		alert('Values should be Integers above 0')
	}
}

// Function that is called at END of timer (replace onTimesUp?), to check
function check_timer_status() {
	if (timer_status == 'work') {
		loops_complete += 1;
		if (loops_complete < loops) {
			console.log('one more!')
			check_if_values_work()
		} else if (loops_complete == loops) {
			console.log("we/'re done here!")
		}
	}
}







// Credit: Mateusz Rybczonec
	// Colors, not sure I'll use them
		const FULL_DASH_ARRAY = 283;
		const WARNING_THRESHOLD = 10;
		const ALERT_THRESHOLD = 5;

		const COLOR_CODES = {
			info: {
				color: "green"
			},
			warning: {
				color: "orange",
				threshold: WARNING_THRESHOLD
			},
			alert: {
				color: "red",
				threshold: ALERT_THRESHOLD
			}
		};

	// Timer variables.
		let TIME_LIMIT;
		let timePassed = 0;
		let timeLeft = TIME_LIMIT;
		let timerInterval = null;
		// let remainingPathColor = COLOR_CODES.info.color;


function onTimesUp() {
	clearInterval(timerInterval);
}

function startTimer() {
	// Start interval: every 1 second, 
	 // timePassed++, 
	 // update timeLeft, 
	 // update Label info, 
	 // update timerProgress, 
	 // update Colors !!(probably can delete. Need color coding for Work and Short-Long Breaks)!!
	console.log(loops)
	timerInterval = setInterval(() => {
		timePassed = timePassed += 1;
		timeLeft = TIME_LIMIT - timePassed;
		document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
		setCircleDasharray();
		// setRemainingPathColor(timeLeft);

		// End Timer
		if (timeLeft === 0) {
			onTimesUp();
		}

	}, 1000);

}

function formatTime(time) {
	const minutes = Math.floor(time / 60);
	let seconds = time % 60;

	if (seconds < 10) {
		seconds = `0${seconds}`;
	}
	return `${minutes}:${seconds}`;
}

// Update timer colors, don't think I need?
// function setRemainingPathColor(timeLeft) {
// 	const { alert, warning, info } = COLOR_CODES;
// 	if (timeLeft <= alert.threshold) {
// 		document.getElementById("base-timer-path-remaining").classList.remove(warning.color);

// 		document.getElementById("base-timer-path-remaining").classList.add(alert.color);
// 	} else if (timeLeft <= warning.threshold) {
// 		document.getElementById("base-timer-path-remaining").classList.remove(info.color);
// 		document.getElementById("base-timer-path-remaining").classList.add(warning.color);
// 	}
// }

function calculateTimeFraction() {
	const rawTimeFraction = timeLeft / TIME_LIMIT;
	return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
	const circleDasharray = `${(calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)} 283`;
	document.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray", circleDasharray);
}
