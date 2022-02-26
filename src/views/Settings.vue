<template>
  <div id="settingsTab">
    <h1>Settings</h1>
    <label>
      Default Tab:
      <select name="defaultTab" id="">
        <option value="Inputs">Inputs</option>
        <option value="Presets">Presets</option>
        <option value="Stopwatch">Stopwatch</option>
      </select>
    </label>

    <p>File Select for Work-ShortBreak-LongBreak end noise</p>
    <p v-for="asad in presets" :key="asad">Lol</p>
  </div>
</template>
<script>
import '@/assets/styles/settings.css'

export default {
  methods: {
    lol () {
      localStorage.setItem('asd', '123')
      localStorage.clear()
    }
  }
}
</script>
