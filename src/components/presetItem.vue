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
      <button @click="deletePreset(index)">Delete</button>
    </div>
  </div>
</template>
<script>
import '@/assets/styles/presetItem.css'
export default {
  props: [
    'presetValues', 'index', 'checkValues', 'getPresets', 'deletePreset'
  ],
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>
