<template>
  <div class="presetCard">
    <div class="values">
      {{ presetValues.workLen }} |
      {{ presetValues.shortBreakLen }} |
      {{ presetValues.longBreakLen }} |
      {{ presetValues.loopsTim }}
    </div>

    <div class="buttonsGoHere">
      <!-- MAKE THESE ICONS -->
      <button @click="checkValues(
        presetValues.workLen,
        presetValues.shortBreakLen,
        presetValues.longBreakLen,
        presetValues.loopsTim)">
          <svg xmlns="http://www.w3.org/2000/svg"
            class="ionicon" viewBox="0 0 512 512">
            <title>Play</title>
            <path d="M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/>
          </svg>
      </button>

      <button @click="deletePreset(index)" class="hideTillHover">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
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
