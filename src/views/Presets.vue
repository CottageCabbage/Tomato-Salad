<template>
  <h1>Presets</h1>

  <div v-for="(preset, i) in presetsOBJ" :key="i" >
    <presetItem
      :presetValues="preset[0]"
      :index="i"
      :checkValues="checkValues"
    />
  </div>

</template>
<script>
import '@/assets/styles/presets.css'
import PresetItem from '@/components/presetItem.vue'

export default {
  props: ['checkValues'],

  mounted () {
    this.getPresets()
  },
  updated () {
    this.getPresets()
  },
  components: { PresetItem },
  data () {
    return {
      presetsOBJ: JSON.parse(localStorage.getItem('presets'))
    }
  },
  methods: {
    getPresets () {
      this.presetsOBJ = JSON.parse(localStorage.getItem('presets'))
    }
  }
}
</script>
