<template>
  <form id="container-form" @submit.prevent>

    <label>
      <span>Focus Period:</span>
      <input
        class="timer-value-input" id="workInput"
        type="number" name="" min="0"
        v-model="work"
        oninput="this.style.width = ((this.value.length + 1) * 16) + 'px'"
      />
    </label>

    <label>
      <span>Short Break Period:</span>
      <input
        class="timer-value-input" id="shortInput"
        type="number" name="" min="0" size="1"
        v-model="shortBreak"
        oninput="this.style.width = ((this.value.length + 1) * 16) + 'px'"
      />
    </label>

    <label>
      <span>Long Break Period:</span>
      <input
        class="timer-value-input" id="longInput"
        type="number" name="" min="0"
        v-model="longBreak"
        oninput="this.style.width = ((this.value.length + 1) * 16) + 'px'"
      />
    </label>

    <label>
      <span>Loops:</span>
      <input
        class="timer-value-input" id="loopTimesInput"
        type="number" name="" min="0"
        v-model="loops"
        oninput="this.style.width = ((this.value.length + 1) * 16) + 'px'"
      />
    </label>

    <button
      @click="checkValues(this.work, this.shortBreak, this.longBreak, this.loops)"
      id="buttonThatStartsTimer">
      Start Pomodoro
    </button>

    <button
      @click="addToPresets(this.work, this.shortBreak, this.longBreak, this.loops)"
      id="buttonThatCreatesPreset">
      Add to Presets
    </button>
  </form>
</template>

<script>
import '@/assets/styles/inputs.css'

export default {
  props: ['checkValues'],
  data () {
    return {
      work: '',
      shortBreak: '',
      longBreak: '',
      loops: ''
    }
  },
  methods: {
    addToPresets (a, b, c, d) {
      const newPreset = [{ workLen: a, shortBreakLen: b, longBreakLen: c, loopsTim: d }]
      // If key 'presets' does not exist...
      if (localStorage.getItem('presets') === null) {
        // create a new array, push newPreset and set it in localStorage
        const x = []
        x.push(newPreset)
        localStorage.setItem('presets', JSON.stringify(x))
      } else {
        const presetsJSON = JSON.parse(localStorage.getItem('presets'))
        presetsJSON.push(newPreset)
        localStorage.setItem('presets', JSON.stringify(presetsJSON))
      }
    }
  }
}
</script>
