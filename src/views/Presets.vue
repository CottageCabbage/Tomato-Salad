<template>
  <h1>Presets</h1>

  <div v-for="(preset, i) in presetsOBJ" :key="i" >
    <presetItem
      :presetValues="preset[0]"
      :index="i"
      :checkValues="checkValues"
      :getPresets="getPresets"
      :deletePreset="deletePreset"
    />
  </div>

  <div v-if="presetsOBJ.length == 0" id="presetsMissing">
    <h2>Oh no,</h2>
    <p>
      It doesn't look like you have any preset. Would you like to
      <router-link to="/Inputs">create one</router-link>?
    </p>
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
  components: { PresetItem },
  data () {
    return {
      presetsOBJ: JSON.parse(localStorage.getItem('presets'))
    }
  },
  methods: {
    getPresets () {
      this.presetsOBJ = JSON.parse(localStorage.getItem('presets'))
    },
    deletePreset (index) {
      const presetsOBJ = JSON.parse(localStorage.getItem('presets'))
      presetsOBJ.splice(index, 1)
      localStorage.setItem('presets', JSON.stringify(presetsOBJ))
      console.log(presetsOBJ)
      this.getPresets()
    }
  }
}
</script>
