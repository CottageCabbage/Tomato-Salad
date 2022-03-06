<template>
  <div id="stopwatch">
    <h2 id="label">00:00</h2>
    <div id="stopwatchButtons">

      <button
        id="startStopwatchBtn"
        @click="assingStopwatchToVar()"
        v-if="stopwatchRunning === false && !stopwatch">
        Start
      </button>

      <button
        id="resumeStopwatchBtn"
        @click="stopwatch.resume()"
        v-if="stopwatchRunning === false && stopwatch">
        Resume
      </button>

      <button
        id="pauseStopwatchBtn"
        @click="stopwatch.pause()"
        v-if="stopwatchRunning === true && stopwatch">
        Pause
      </button>

      <button
        id="resetStopwatchBtn"
        @click="stopwatch.cancel()"
        v-if="stopwatch">
        Reset
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stopwatchRunning', 'alterStopwatchRunning'],
  mounted () {
    if (this.stopwatchRunning) {
      this.updateStopwatchLabel()
    }
  },
  data () {
    return {
      stopwatch: '',
      stopwatchState: ''
    }
  },
  methods: {
    assingStopwatchToVar () {
      this.stopwatch = this.startStopwatch()
    },

    startStopwatch () {
      let startTime
      let timer
      // let ms
      // timer values
      let diff
      let sum = 0
      let total = 0
      let minutes
      let seconds
      // let minutes
      // Outside methods & var
      const alterStopwatchRunning = this.alterStopwatchRunning
      const updateStopwatchLabel = this.updateStopwatchLabel
      const resetStopwatch = this.resetStopwatch
      // Declare obj
      var obj = {}

      // Resume: get current time, set timer interval and change bool 'stopwatchRunning?' to true
      obj.resume = function () {
        startTime = new Date().getTime()
        timer = setInterval(obj.step, 250)
        alterStopwatchRunning()
      }

      obj.step = function () {
        diff = Math.max(0, new Date().getTime() - startTime)

        sum = diff + total

        seconds = Math.floor(sum / 1000) % 60
        minutes = Math.floor(sum / 60000)
        // if (seconds) below '10', add a '0' in front of it.
        seconds = (seconds < 10 ? '0' : '') + seconds
        // update timer label
        updateStopwatchLabel(minutes, seconds)
      }

      obj.pause = function () {
        // ms = obj.step()
        total = diff + total
        clearInterval(timer)
        alterStopwatchRunning()
        // console.log(ms)
      }

      obj.cancel = function () {
        alterStopwatchRunning()
        resetStopwatch()
        updateStopwatchLabel('0', '00')
        clearInterval(timer)
      }

      obj.resume()
      return obj
    },

    updateStopwatchLabel (minutes, seconds) {
      document.getElementById('label').innerHTML = minutes + ':' + seconds
    },
    resetStopwatch () {
      this.stopwatch = ''
    }
  }
}
</script>

<style scoped>
#stopwatch {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  /* justify-content: center; */
  align-content: center;
}

#stopwatch > h2 {
  font-size: 60px;
  position: absolute;
  top: 40%; left: 50%;
  transform: translate(-50%, -50%);
}

#stopwatchButtons {
  position: fixed;
  left: 50%;
  top: 60%;
  width: 33%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
}

#stopwatchButtons > button {
  border: none;
  border-radius: 3px;
  padding: 5px;
  font-size: 18px;
  margin-left: 5px;
  margin-right: 5px;
  transition: transform 0.3s;
}
#stopwatchButtons > button:hover {
  transform: scale(1.1);
}

#startStopwatchBtn {
  background-color: #79842a;
  font-size: 20px;
  width: 100%;
}

#resumeStopwatchBtn {
  width: 100%;
}
#pauseStopwatchBtn {
  width: 100%;
}
#resetStopwatchBtn {
  width: 100%;
  background-color: rgb(255, 74, 74);
}

</style>
