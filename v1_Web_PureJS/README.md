## Progress:
+ **2021-12-19:** Still fumbling around. The input is set to take a value in the format hours:minutes:seconds and then get an array of these as seconds. 

+ **2021-12-20:** Backtracked on the "Turn-everything-into-seconds" decision. Now input is properly divided into hours, minutes and seconds. Using setInterval, a function is called every 1 second to update the values. First, subtracting seconds one by one until these reach 0. At this point, minutes is subtracted by one, and *secs* are set back to 60. This will go on until minutes also reach zero. If an 'hour' value was set, it will be subtracted by one, minutes will be set to 60 again, and the timer will continue in loop, until every value reaches 0. An alert() will be called then. The timer's values are displayed with both console.log and with innerHTML. 

+ **2021-12-21:** Input and 'start' button will both receive the *disabled* attribute once the latter is pressed. The 'reset' button will enable them again with *.attributes.removeNamedItem*. ~~At the moment, disabled input/buttons don't have any distinction to their enabled counterpart~~ nevermind, that wasn't to difficult. Just fix the crappy CSS later on.

+ **2021-12-22:** Added restTimer and loopTimes inputs. Currently working on how to reuse *theTimer()* function without copy-and-pasting it with different variables. While browsing, I found the following advice for countdown timers, which advices against what I'm doing right now. I kind of want to complete this one as it is before going for another solution, but will likely remake TomatoSalad based on it once I'm finished.

> You shouldn't measure time in interval function. Instead just save time when timer was started and measure difference when timer was stopped/paused. Use setInterval only to update displayed value. So there is no need to pause timer and you will get best possible accuracy in this way.

+ **2021-12-23:** The restTimer is fully working now, The Timer is still in an infinite timer between work and rest, but I think that should be easily fixed with *for* or *while* loops. This has dragged on for a while, but I think it's about over. Once the javascript is finished, I will try making the .css prettier before putting it on codepen.

+ **2021-12-24:** *ifs* were used in place of *for's*, but the loop-part seems to be working fine. The amout of loops ran is displayed at the bottom of the card, together with the wanted amount of loops. ~~As of now, the former is updated as soon as a workTimer starts, as such, '2/3' means *1 loop completed* and *1 on-going*. That's not optimal.~~ nevermind, fixed that. The loopCount displays properly now. After the final work pomodoro, no timer for rest is provided. It's meant to be this way, but I'll add to "to these" a way (checkbox?) to toogle otherwise.


### Fix these:
+ ~~*minutes* and *seconds* can be set to above 60.~~ Fixed.
+ ~~in InnerHTML, the values should preferably be displayed in the format 0n if they are below 10.~~ Fixed for minutes and seconds, unsure whether I should do the same for hours.
+ Give warning if input in the wrong format, don't start timer. 

### Do these:
+ ~~Rest timer~~ Done
+ ~~Loop times~~ Done
+ ~~Display current loop out of times~~ Done
+ Add sound.
+ Toogle Final Rest

### Potentially Useful Links:

// https://stackoverflow.com/questions/457826/pass-parameters-in-setinterval-function
// https://stackoverflow.com/questions/21277900/how-can-i-pause-setinterval-functions
// https://stackoverflow.com/questions/7279567/how-do-i-stop-a-window-setinterval-in-javascript/7282347#7282347
// https://stackoverflow.com/questions/7279567/how-do-i-stop-a-window-setinterval-in-javascript
// https://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer

