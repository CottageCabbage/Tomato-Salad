<template>
  <router-view
    :timerValues="timerValues"
    :checkValues="checkValues"
  />
</template>

<script>
import router from '@/router'
import '@/assets/styles/main.css'

export default {
  mounted () {
    router.push({ name: this.defaultTab })
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
        router.push({ name: 'Timer' })
        // document.getElementById('HEY').innerHTML = 'Lol'
        // this.startTimer(this.timerValues[0].workLength)
      } else {
        alert('Nope')
      }
    }
  }
}
</script>
