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

    <label>
      Prompt me before starting next timer?
      <input type="checkbox" v-model="data_promptEnd"/>
    </label>

    <label>
      How much time to add to timer with + button?
      <select name="plusButton" id="" v-model="data_addToTimer">
        <option value="1">+1 minute</option>
        <option value="3" selected>+3 minutes</option>
        <option value="5">+5 minutes</option>
        <option value="custom">Custom value</option>
      </select>
    </label>

    <label>
      Custom value for 'Add to Timer' Button.
      <input
        type="number"
        :disabled="data_addToTimer !== 'custom'"
        v-model="data_customValue"
      />
    </label>

  </div>
</template>
<script>
import '@/assets/styles/settings.css'

export default {
  data () {
    return {
      data_defaultTab: localStorage.getItem('defaultTabVal'),
      data_promptEnd: localStorage.getItem('promptEndVal'),
      data_addToTimer: localStorage.getItem('addToTimerVal'),
      data_customValue: localStorage.getItem('customValue')
    }
  },
  mounted () {
    if (this.data_addToTimer == null) {
      this.data_addToTimer = 3
    }
  },
  watch: {
    data_defaultTab: function () {
      localStorage.setItem('defaultTabVal', this.data_defaultTab)
    },
    data_promptEnd: function () {
      switch (localStorage.getItem('promptEndVal')) {
        case 'true':
          localStorage.setItem('promptEndVal', false)
          break
        case 'false':
        default:
          localStorage.setItem('promptEndVal', true)
          break
      }
    },
    data_addToTimer: function () {
      localStorage.setItem('addToTimerVal', this.data_addToTimer)
    },
    data_customValue: function () {
      localStorage.setItem('customValue', this.data_customValue)
    }
  }
}
</script>
