<template>

  <div id="timerContainer">

    <div id="infoContainer">
      <span id="typeLabel">{{updateTypeLabel()}}</span>

      <span id="timerLabel"></span>

      <span id="loopsLabel">0/0</span>
    </div>

    <div id="stateButtonsContainer">
      <button id="pause-button" v-if="timerPaused == false"
        @click="timer.pause(); timerPaused = true">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0
            102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <button id="resume-button" v-if="timerPaused == true"
        @click="timer.resume(); timerPaused = false">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
        </svg>
      </button>

      <button id="cancel-button" @click="timer.cancel()">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293
            1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1
            0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"
          />
        </svg>
      </button>

      <button id="modify-button" @click="timer.modify()">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0
          100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>

</template>
<script>
import '@/assets/styles/timer.css'

import windchimeAudio from '@/assets/audio/windchime.mp3'
import crowdCheerAudio from '@/assets/audio/crowd_cheer.mp3'

export default {
  props: ['timerValues', 'defaultTab', 'timerRunning', 'alterTimerRunning'],
  mounted () {
    this.updateLoopsLabel()
    if (this.timerRunning === false) {
      this.alterTimerRunning()
      this.timerType = 'work'
      this.timer = this.startTimer(this.timerValues[0].workLength * 60)
    }
  },
  data () {
    return {
      timerPaused: false,
      timerType: '',
      loops: 0,
      timer: ''
    }
  },
  methods: {
    startTimer (seconds) {
      let startTime
      let timer
      let ms = seconds * 1000
      // Outside functions:
      const doThing = this.nextAction
      const goBack = this.goBackToDefault
      const alterTimerRunning = this.alterTimerRunning
      // Declare object
      var obj
      obj = {}

      obj.resume = function () {
        startTime = new Date().getTime()
        timer = setInterval(obj.step, 250)
      }

      obj.pause = function () {
        ms = obj.step()
        clearInterval(timer)
      }

      obj.step = function () {
        var now = Math.max(0, ms - (new Date().getTime() - startTime))
        var m = Math.floor(now / 60000)
        var s = Math.floor(now / 1000) % 60

        // if (seconds) below '10', add a '0' in front of it.
        s = (s < 10 ? '0' : '') + s
        // update timer label
        document.getElementById('timerLabel').innerHTML = m + ':' + s

        if (now === 0) {
          clearInterval(timer)
          obj.resume = function () {}
          doThing()
        }

        return now
      }
      obj.cancel = function () {
        clearInterval(timer)
        obj.resume = function () {}
        alterTimerRunning()
        goBack()
      }
      obj.modify = function () {
        if (localStorage.getItem('addToTimerVal') !== null) {
          const addToTimerValue = localStorage.getItem('addToTimerVal')

          switch (addToTimerValue) {
            case 1:
              ms += 1 * 1000 * 60
              break
            case 3:
              ms += 3 * 1000 * 60
              break
            case 5:
              ms += 5 * 1000 * 60
              break
            case 'custom':
              ms += localStorage.getItem('customValue') * 1000 * 60
              break
          }
        } else {
          // Add 3 minutes to timer
          ms += 3 * 1000 * 60
        }
      }

      obj.resume()
      return obj
    },
    nextAction () {
      let audio

      switch (this.timerType) {
        // If just finished 'work' timer...
        case 'work':
          // update loops
          this.loops += 1
          this.updateLoopsLabel()
          // and check if loops lower than the value typed in (means there )
          if (this.loops < this.timerValues[0].loops) {
            // If so, play audio and
            audio = new Audio(windchimeAudio)
            audio.play()
            // prompt to start Short Break timer
            if (localStorage.getItem('promptEndVal') === 'true') {
              confirm('Start Short Break?')
            }
            this.timerType = 'shortBreak'
            this.timer = this.startTimer(this.timerValues[0].shortBreakLength * 60)
          } else { // Otherwise, prompt to start Long Break.
            if (localStorage.getItem('promptEndVal') === 'true') {
              confirm('Start Long Break?')
            }
            this.timerType = 'longBreak'
            this.timer = this.startTimer(this.timerValues[0].longBreakLength * 60)
          }
          break
        // If just finished 'short break' timer, prompt to start work
        case 'shortBreak':
          if (localStorage.getItem('promptEndVal') === 'true') {
            confirm('Start Working again?')
          }
          this.timerType = 'work'
          this.timer = this.startTimer(this.timerValues[0].workLength * 60)
          break
        // If just finished 'long break', alert, play audio and push to default tab
        case 'longBreak':
          alert('You have completed your Pomodoro')
          audio = new Audio(crowdCheerAudio)
          audio.play()
          this.$router.push({ name: this.defaultTab })
          break
      }
    },
    updateLoopsLabel () {
      const label = document.getElementById('loopsLabel')
      label.innerHTML = (this.loops + '/' + this.timerValues[0].loops)
    },
    updateTypeLabel () {
      switch (this.timerType) {
        case 'work':
          return 'WORK'
        case 'shortBreak':
          return 'Short Break'
        case 'longBreak':
          return 'Long Break'
      }
    },
    goBackToDefault () {
      this.$router.push({ name: this.defaultTab })
    }
  }
}
</script>
