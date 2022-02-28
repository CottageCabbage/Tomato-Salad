<template>
  <div class="presetCard">
    <div class="values">
      {{ presetValues.workLen }} |
      {{ presetValues.shortBreakLen }} |
      {{ presetValues.longBreakLen }} |
      {{ presetValues.loopsTim }}
    </div>
    <div class="buttonsGoHere">
      <button @click="checkValues(
        presetValues.workLen,
        presetValues.shortBreakLen,
        presetValues.longBreakLen,
        presetValues.loopsTim)">
        Play
      </button>
      <button @click="deletePreset()">Delete</button>
    </div>
  </div>
</template>
<script>
import '@/assets/styles/presetItem.css'
export default {
  props: ['presetValues', 'index', 'checkValues'],
  data () {
    return {

    }
  },
  methods: {
    deletePreset () {
      const presetsOBJ = JSON.parse(localStorage.getItem('presets'))
      presetsOBJ.splice(this.index, 1)
      localStorage.setItem('presets', JSON.stringify(presetsOBJ))
      console.log(presetsOBJ)
    }
  }
}
</script>
