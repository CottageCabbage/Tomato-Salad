<template>
  <router-view
    :timerValues="timerValues"
    :checkValues="checkValues"
    :startTimer="startTimer"
    :timerState="timerState"
  />
</template>

<script>
import '@/assets/styles/main.css'

export default {
  mounted () {
    this.$router.push({ name: this.defaultTab })
  },

  data () {
    return {
      defaultTab: 'Inputs',
      timerState: '',
      timerValues: [{ workLength: '', shortBreakLength: '', longBreakLength: '', loops: '' }]
    }
  },

  methods: {
    checkValues (work, sB, lB, loopsInput) {
      if (work > 0 && sB > 0 && lB > 0 && loopsInput > 0) {
        // Assing values
        this.timerValues[0].workLength = work
        this.timerValues[0].shortBreakLength = sB
        this.timerValues[0].longBreakLength = lB
        this.timerValues[0].loops = loopsInput
        // Call method
        this.startTimer(this.timerValues[0].workLength)
      } else {
        alert('Nope')
      }
    },

    startTimer (seconds) {
      this.$router.push({ name: 'Timer' })

      const display = document.getElementById('base-timer-label')
      display.innerHTML = 'LOL'
      let startTime
      let timer
      let ms = seconds * 1000

      var obj
      obj = {}

      obj.resume = function () {
        this.timerState = 'ongoing'
        startTime = new Date().getTime()
        timer = setInterval(obj.step, 250)
      }

      obj.pause = function () {
        this.timerState = 'paused'
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
        display.innerHTML = m + ':' + s

        if (now === 0) {
          clearInterval(timer)
          obj.resume = function () {}
          // this.when_timer_ends()
        }

        return now
      }

      obj.resume()
      return obj
    }
  }
}
</script>
