<h1 align='center'>TomatoSalad</h1>

My attempts at making a Pomodoro Timer. Currently, it's only html-css-js, coupled with Electron. Maybe in the future, once I'm more familiar with then, will try to make it with some Framework. 



### Roadmap
+ Add pause/resume/reset button to timer-tab. (Disable tab-switch buttons when timer is active?)
+ Add noise when timers completed!
+ Color coding: {work=x} {short-break=y} {long-break=z} (think of colors later)
---
+ Presets tab, where typical pomodoro (25-5-15-4) timer-preset will be there by default. New presets can be added.
	+ Figure out a way to save presets. Do cookies work on Electron apps? Otherwise, local files? .json maybe. 
---

Add icons to swap tab buttons. [Input (Timer), Presets, Stopwatch]

Swap tabs with arrow keys too? Could use @keyup but the buttons would have to be selected? Maybe event listener, then query for the button with the right class, and execute it's @click?


+ Auto-start Work/Break timers (Setting, checkbox)
	+ For now, use alert() if on, and confirm if off



+ Maybe option for some music on repeat? Lo-fi?


+ slider in settings for setInterval(obj.step, NUMBER)? affects granularity. Lower numbers are more accurate, also more CPU-expensive

+ For some reason, am not managing to toogle pause/resume button?  check later. 


+ For some reason, can't call method from within method? Really have to make some progress on the Vue Course before continuing this.



#### For Icons
https://iconoir.com/  
https://heroicons.com/
#### For Sounds
https://pixabay.com/sound-effects/  
https://www.videvo.net/royalty-free-sound-effects/  