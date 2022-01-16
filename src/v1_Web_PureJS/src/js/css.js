var a = document.getElementById("settingsBlock").classList
console.log(a[1])


function toogleSettings() {
	if ('openSettings' == a[1]) {
		document.getElementById("settingsBlock").classList.add('closeSettings');
		document.getElementById("settingsBlock").classList.remove('openSettings'); 		
		document.querySelector("#asd").style.transform = "rotate(360deg)";
	} 
	else if ('closeSettings' == a[1] | undefined == a[1]) {
		document.getElementById("settingsBlock").classList.add('openSettings');
		document.getElementById("settingsBlock").classList.remove('closeSettings'); 
		document.querySelector("#asd").style.transform = "rotate(180deg)";	
	}


}