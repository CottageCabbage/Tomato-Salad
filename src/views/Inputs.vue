<template>
  <form id="container-form" @submit.prevent>

    <label>
      <span>Focus Period:</span>
      <input
        class="timer-value-input"
        type="number" name="" min="0"
        v-model="work"
        oninput="this.style.width = ((this.value.length + 1) * 16) + 'px'"
      />
    </label>

    <label>
      <span>Short Break Period:</span>
      <input
        class="timer-value-input"
        type="number" name="" min="0" size="1"
        v-model="shortBreak"
        oninput="this.style.width = ((this.value.length + 1) * 16) + 'px'"
      />
    </label>

    <label>
      <span>Long Break Period:</span>
      <input
        class="timer-value-input"
        type="number" name="" min="0"
        v-model="longBreak"
        oninput="this.style.width = ((this.value.length + 1) * 16) + 'px'"
      />
    </label>

    <label>
      <span>Loops:</span>
      <input
        class="timer-value-input"
        type="number" name="" min="0"
        v-model="loopsInput"
        oninput="this.style.width = ((this.value.length + 1) * 16) + 'px'"
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

  }
}
</script>
