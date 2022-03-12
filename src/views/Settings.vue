<template>
  <div id="settingsTab">
    <h1>Settings</h1>
    <label>
      Default Tab:
      <select name="defaultTab" id="" v-model="data_defaultTab">
        <option value="Inputs" selected>Inputs</option>
        <option value="Presets">Presets</option>
        <option value="Stopwatch">Stopwatch</option>
      </select>
    </label>

    <p>File Select for Work-ShortBreak-LongBreak end noise</p>
  </div>
</template>
<script>
import '@/assets/styles/settings.css'

export default {
  data () {
    return {
      data_defaultTab: 'Inputs'
    }
  },
  watch: {
    data_defaultTab: function () {
      localStorage.setItem('defaultTabVal', this.data_defaultTab)
    }
  },
  methods: {
    defaultTabSetting () {

      // const newPreset = [{ workLen: a, shortBreakLen: b, longBreakLen: c, loopsTim: d }]
      // // If key 'presets' does not exist...
      // if (localStorage.getItem('presets') === null) {
      //   // create a new array, push newPreset and set it in localStorage
      //   const x = []
      //   x.push(newPreset)
      //   localStorage.setItem('presets', JSON.stringify(x))
      // } else {
      //   const presetsJSON = JSON.parse(localStorage.getItem('presets'))
      //   presetsJSON.push(newPreset)
      //   localStorage.setItem('presets', JSON.stringify(presetsJSON))
      // }
    }
  }
}
</script>
