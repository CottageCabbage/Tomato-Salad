<h1 align='center'>TomatoSalad</h1>

My attempts at making a Pomodoro Timer. Currently, it's only html-css-js, coupled with Electron. Maybe in the future, once I'm more familiar with then, will try to make it with some Framework. 



### User Stories
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

+ Maybe option for some music on repeat? Lo-fi?


### Reference
+ https://github.com/roldanjr/pomatez (Typescript)
+ https://github.com/karimdaghari/pomotroid (Vue)
+ https://github.com/gnome-pomodoro/gnome-pomodoro (Vala?? Never heard about it. Saving just in case)
+ https://github.com/RoderickQiu/wnr (Electron & Vue?)
+ https://github.com/KeziahMoselle/tempus/releases/tag/v1.7.0 (Electron & React)
+ https://github.com/schmich/marinara (Vue, Ruby)
+ https://github.com/adrcotfas/Goodtime (Kotlin, ANDROID)

> https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/

**Important:**
+ https://stackoverflow.com/questions/16134997/how-to-pause-and-resume-a-javascript-timer
Currently using setInterval, looks like I'll have to change that for accuracy. 

#### For Icons
https://iconoir.com/  
https://iconscout.com/  
#### For Sounds
https://pixabay.com/sound-effects/  
https://www.videvo.net/royalty-free-sound-effects/  