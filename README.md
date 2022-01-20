<h1 align='center'>TomatoSalad</h1>

My attempts at making a Pomodoro Timer. Currently, it's only html-css-js, coupled with Electron. Maybe in the future, once I'm more familiar with then, will try to make it with some Framework. 

<h2 align='center'>Goals:</h2>

### GUI:

#### General:
+ At all times, in the bottom left and right corners of the screen, will be two buttons. Through then, alternate between tabs of application. Supposed to work with left and right arrows too. Maybe option to hide them. When alternating between tabs, the buttons available are supposed to change too.

+ The SETTINGS button, however, is static, and will always be on the top-left corner of the screen.

#### TIMER:
+ Once inputs (Integers above 0 (Checked with the `check_if_values_valid` function)) have been typed in, and the '#confirm-values' button clicked, swap tabs from "#timer-values-inputs-container" to "#timer-display-container". 

> Now, this is done through alternating through .style.display = 'none'/'flex'. In the future, make this prettier (transition? Left-to-right, or opacity change, coupled with z-index?). Relevant function is `swap_tabs()`.

> If values not valid, an alert is called. That's also pretty ugly. Change it if possible. 

+ Once values have been validated and tabs swapped, call for `startTimer()` with the variable `work_timer` as parameter. The variable `timer_status` should also be set to 'work', through this may be done outside of function. 






### Reference
+ https://github.com/roldanjr/pomatez (Typescript)
+ https://github.com/karimdaghari/pomotroid (Vue)
+ https://github.com/gnome-pomodoro/gnome-pomodoro (Vala?? Never heard about it. Saving just in case)
+ https://github.com/RoderickQiu/wnr (Electron & Vue?)
+ https://github.com/KeziahMoselle/tempus/releases/tag/v1.7.0 (Electron & React)
+ https://github.com/schmich/marinara (Vue, Ruby)
+ https://github.com/adrcotfas/Goodtime (Kotlin, ANDROID)

