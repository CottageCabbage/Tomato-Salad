<template>

  <div id="timer-display-container">
    <div id="timer-box">

      <div class="base-timer">
        <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g class="base-timer__circle">
            <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
            <path
              id="base-timer-path-remaining"
              stroke-dasharray="283"
              class="base-timer__path-remaining ${remainingPathColor}"
              d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0">
            </path>
          </g>
        </svg>
        <span id="base-timer-label" class="base-timer__label"></span>
      </div>

    </div>
    <span id="loops-completed-label">
      0/0
    </span>

    <button id="pause-timer">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0
          102 0V8a1 1 0 00-1-1z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <button id="resume-timer">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1
          0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>
    </button>

    <button id="cancel-timer">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293
          1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1
          0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>

</template>
<script>
import '@/assets/styles/timer.css'
export default {

}
</script>
