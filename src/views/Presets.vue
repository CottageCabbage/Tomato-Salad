<template>
  <h1>Presets</h1>

  <div v-for="(preset, i) in presetsOBJ" :key="i">
    {{ preset[0] }} |
    {{ preset[0].workLen }} |
    {{ preset[0].shortBreakLen }} |
    {{ preset[0].longBreakLen }} |
    {{ preset[0].loopsTim }}
    <!-- <span v-for="(value, k) in preset" :key="k">
      {{ value }} |
    </span> -->
  </div>

</template>
<script>
import '@/assets/styles/presets.css'

export default {
  mounted () {
    this.getPresets()
  },
  data () {
    return {
      presetsOBJ: ''
    }
  },
  methods: {
    getPresets () {
      this.presetsOBJ = JSON.parse(localStorage.getItem('presets'))
    }
  }
}
</script>
