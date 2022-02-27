<template>
  <h1>Presets</h1>

  <div v-for="(preset, i) in presetsOBJ" :key="i" >
    {{ preset[0] }} |
    <presetItem
      :presetValues="preset[0]"
    />
  </div>

</template>
<script>
import '@/assets/styles/presets.css'
import PresetItem from '@/components/presetItem.vue'

export default {
  mounted () {
    this.getPresets()
  },
  components: { PresetItem },
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
