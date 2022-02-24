<template>
  <form id="container-form" @submit.prevent>

    <label>
      <span>Focus Period:</span>
      <input
        class="timer-value-input" id="workInput"
        type="number" name="" min="0"
        v-model="work"
        oninput="this.style.width = ((this.value.length + 1) * 16) + 'px'"
        @keydown.esc="blurInputs()"
      />
    </label>

    <label>
      <span>Short Break Period:</span>
      <input
        class="timer-value-input" id="shortInput"
        type="number" name="" min="0" size="1"
        v-model="shortBreak"
        oninput="this.style.width = ((this.value.length + 1) * 16) + 'px'"
        @keydown.esc="blurInputs()"
      />
    </label>

    <label>
      <span>Long Break Period:</span>
      <input
        class="timer-value-input" id="longInput"
        type="number" name="" min="0"
        v-model="longBreak"
        oninput="this.style.width = ((this.value.length + 1) * 16) + 'px'"
        @keydown.esc="blurInputs()"
      />
    </label>

    <label>
      <span>Loops:</span>
      <input
        class="timer-value-input" id="loopTimesInput"
        type="number" name="" min="0"
        v-model="loopsInput"
        oninput="this.style.width = ((this.value.length + 1) * 16) + 'px'"
        @keydown.esc="blurInputs()"
      />
    </label>

    <button @click="checkValues(this.work, this.shortBreak, this.longBreak, this.loopsInput)"
      id="buttonThatStartsTimer">
      Start Pomodoro
    </button>
  </form>
</template>

<script>
import '@/assets/styles/inputs.css'

export default {
  props: ['timerValues', 'checkValues'],
  data () {
    return {
      work: '',
      shortBreak: '',
      longBreak: '',
      loopsInput: ''
    }
  },
  methods: {
    blurInputs () {
      document.getElementById('workInput').blur()
      document.getElementById('shortInput').blur()
      document.getElementById('longInput').blur()
      document.getElementById('loopTimesInput').blur()
      // document.querySelectorAll('.timer-value-input').blur()
    }
  }
}
</script>
