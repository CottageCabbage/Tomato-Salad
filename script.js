function CoolFunc() {
	timer = document.getElementById('inputTime').value;
	console.log(timer)
	timerTime = timer.split(":")
	document.getElementById('timerPlace').innerHTML = timerTime;

	seconds = [(timerTime[0]*3600), (timerTime[1]*60), (timerTime[2]*1)]
	console.log(seconds)
}