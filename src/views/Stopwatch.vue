<template>
  <div id="stopwatch">
    <h2 id="label">00:00</h2>
    <div id="stopwatchButtons">

      <button
        @click="assingStopwatchToVar()"
        v-if="stopwatchRunning === false && !stopwatch">
        Start
      </button>

      <button
        @click="stopwatch.resume()"
        v-if="stopwatchRunning === false && stopwatch">
        Resume
      </button>

      <button
        @click="stopwatch.pause()"
        v-if="stopwatchRunning === true && stopwatch">
        Pause
      </button>

      <button
        @click="stopwatch.cancel()"
        v-if="stopwatch">
        Reset
      </button>

      {{stopwatchRunning}}
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
      stopwatch: ''
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
      let running
      let seconds
      // let minutes
      // Outside methods & var
      const alterStopwatchRunning = this.alterStopwatchRunning
      const updateStopwatchLabel = this.updateStopwatchLabel
      // Declare obj
      var obj = {}

      // Resume: get current time, set timer interval and change bool 'stopwatchRunning?' to true
      obj.resume = function () {
        startTime = new Date().getTime()
        timer = setInterval(obj.step, 250)
        alterStopwatchRunning()
      }

      obj.step = function () {
        running = true
        console.log(running)

        diff = Math.max(0, new Date().getTime() - startTime)

        sum = diff + total

        // console.log('Sum:', sum)
        // console.log('Diff:', diff)
        // console.log('Total:', total)

        seconds = Math.floor(sum / 1000) % 60
        minutes = Math.floor(sum / 60000)
        // if (seconds) below '10', add a '0' in front of it.
        seconds = (seconds < 10 ? '0' : '') + seconds
        // update timer label
        updateStopwatchLabel(minutes, seconds)
      }

      // Pause: assing Step to ms, clear
      obj.pause = function () {
        // ms = obj.step()
        total = diff + total
        clearInterval(timer)
        alterStopwatchRunning()
        // console.log(ms)
        running = false
      }
      obj.cancel = function () {
        alterStopwatchRunning()
        clearInterval(timer)
      }

      obj.resume()
      return obj
    },

    updateStopwatchLabel (minutes, seconds) {
      document.getElementById('label').innerHTML = minutes + ':' + seconds
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
  transform: translate(-50%, -50%);
}

</style>
