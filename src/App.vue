<template>
  <router-view
    :timerValues="timerValues"
    :checkValues="checkValues"
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
      defaultTab: 'Timer',
      timerValues: [{ workLength: '', shortBreakLength: '', longBreakLength: '', loops: '' }]
    }
  },

  methods: {
    checkValues (work, sB, lB, loopsInput) {
      if (work > 0 && sB > 0 && lB > 0 && loopsInput > 0) {
        this.timerValues[0].workLength = work
        this.timerValues[0].shortBreakLength = sB
        this.timerValues[0].longBreakLength = lB
        this.timerValues[0].loops = loopsInput
        this.lol()
      } else {
        alert("didn't work :(")
      }
    },
    lol () {
      alert(this.timerValues[0].workLength)
      alert(this.timerValues[0].shortBreakLength)
      alert(this.timerValues[0].longBreakLength)
      alert(this.timerValues[0].loops)
    }
  }
}
</script>
