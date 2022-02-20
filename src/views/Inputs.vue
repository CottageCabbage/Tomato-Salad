<template>
  <form id="container-form" @submit.prevent>
    <label>
      <span>Focus Period</span>
      <input
        class="timer-value-input"
        type="number" name="" min="0"
        v-model="work"
      />
    </label>

    <label>
      <span>Short Break Period</span>
      <input
        class="timer-value-input"
        type="number" name="" min="0"
        v-model="shortBreak"
      />
    </label>

    <label>
      <span>Long Break Period</span>
      <input
        class="timer-value-input"
        type="number" name="" min="0"
        v-model="longBreak"
      />
    </label>

    <label>
      <span>Loops</span>
      <input
        class="timer-value-input"
        type="number" name="" min="0"
        v-model="loopsInput"
      />
    </label>

    <button @click="checkValues(this.work, this.shortBreak, this.longBreak, this.loopsInput)">
      Start Pomodoro
    </button>

    <span id="HEY">ay</span>
  </form>
</template>

<script>
import '@/assets/styles/inputs.css'

export default {
  props: ['timerValues', 'checkValues'],
  data () {
    return {
      work: 25,
      shortBreak: 5,
      longBreak: 15,
      loopsInput: 4
    }
  },
  methods: {

  }
}
</script>
