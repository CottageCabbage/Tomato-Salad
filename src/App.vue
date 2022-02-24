<template>
  <router-view
    :timerValues="timerValues"
    :checkValues="checkValues"
    :defaultTab="defaultTab"
  />

  <div>
    <router-link class="viewbutton" id="leftLink" to="/Inputs">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
    </router-link>
    <router-link class="viewbutton" id="rightLink" to="/Presets">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
    </router-link>
  </div>
</template>

<style>
.viewbutton {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #eee;
  transition: color 0.5s, width 0.5s, height 0.5s;
}

.viewbutton:hover, .viewbutton:focus {
  color: #aaa;
  cursor: pointer;
  width: 40px;
  outline: none;
  height: 40px}
.viewbutton:active {color: #666}

#leftLink {left: 5px;}
#rightLink {right: 05px;}
</style>

<script>
import router from '@/router'
import '@/assets/styles/main.css'

export default {
  mounted () {
    router.push({ name: this.defaultTab })
  },

  data () {
    return {
      defaultTab: 'Inputs',
      timerState: '',
      timerValues: [{ workLength: '', shortBreakLength: '', longBreakLength: '', loops: '' }]
    }
  },

  methods: {
    checkValues (work, sB, lB, loopsInput) {
      if (work > 0 && sB > 0 && lB > 0 && loopsInput > 0) {
        // Assing values
        this.timerValues[0].workLength = work
        this.timerValues[0].shortBreakLength = sB
        this.timerValues[0].longBreakLength = lB
        this.timerValues[0].loops = loopsInput
        // Call method
        router.push({ name: 'Timer' })
        // document.getElementById('HEY').innerHTML = 'Lol'
        // this.startTimer(this.timerValues[0].workLength)
      } else {
        alert('Nope')
      }
    }
  }
}
</script>
