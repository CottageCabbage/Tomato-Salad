<template>
  <router-view
    :timerValues="timerValues"
    :checkValues="checkValues"
    :defaultTab="defaultTab"
    :timerRunning="timerRunning" :alterTimerRunning="alterTimerRunning"
    :stopwatchRunning="stopwatchRunning" :alterStopwatchRunning="alterStopwatchRunning"
  />
  <Sidebar :timerRunning="timerRunning"/>

</template>

<script>
import router from '@/router'
import '@/assets/styles/main.css'
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: { Sidebar },
  mounted () {
    if (localStorage.getItem('defaultTabVal') === null) {
      localStorage.setItem('defaultTabVal', 'Inputs')
    }

    const x = localStorage.getItem('defaultTabVal')
    this.defaultTab = x
    router.push({ name: this.defaultTab })
  },

  data () {
    return {
      defaultTab: '',
      timerState: '',
      timerValues: [{ workLength: '', shortBreakLength: '', longBreakLength: '', loops: '' }],
      timerRunning: false,
      stopwatchRunning: false
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
        router.push({ name: 'Timer' })
      } else {
        alert('Nope')
      }
    },
    alterTimerRunning () {
      this.timerRunning = !this.timerRunning
    },
    alterStopwatchRunning () {
      this.stopwatchRunning = !this.stopwatchRunning
    }
  }
}
</script>
