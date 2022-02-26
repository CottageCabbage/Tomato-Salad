<template>
  <h1>Presets</h1>

  <div v-for="(preset, i) in presets" :key="i">
    <span v-for="(value, k) in preset" :key="k">
      {{ value }} |
    </span>
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
      presets: ''
    }
  },
  methods: {
    getPresets () {
      this.presets = JSON.parse(localStorage.getItem('presets'))
      // console.log(this.presets)
    }
  }
}
</script>
