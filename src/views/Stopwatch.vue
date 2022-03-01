<template>
  <div id="stopwatch">
    <h2 id="label">00:00</h2>
    <div id="stopwatchButtons">
      <button @click="startStopwatch()">Start</button>
      <button>Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    startStopwatch () {
      var obj = {}
      const startTime = new Date().getTime()
      let timer
      // let ms

      obj.resume = function () {
        timer = setInterval(obj.step, 250)
      }

      obj.step = function () {
        var timePassed = Math.max((new Date().startTime() - startTime))
        // var now = Math.max(0, ms - (new Date().getTime() - startTime))
        // var m = Math.floor(now / 60000)
        // var s = Math.floor(now / 1000) % 60
        return now
      }

      obj.cancel = function () {
        clearInterval(timer)
      }

      document.getElementById('label').innerHTML = timer
      obj.resume()
      return obj
    }
  }
}
</script>

<style scoped>
#stopwatch {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  /* justify-content: center; */
  align-content: center;
}

#stopwatch > h2 {
  font-size: 60px;
  position: absolute;
  top: 40%; left: 50%;
  transform: translate(-50%, -50%);
}

#stopwatchButtons {
  position: fixed;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
}

</style>
