<template>
  <div>
    {{ presetValues.workLen }}
    {{ presetValues.shortBreakLen }}
    {{ presetValues.longBreakLen }}
    {{ presetValues.loopsTim }}
  </div>
</template>
<script>
export default {
  props: ['presetValues'],
  data () {
    return {

    }
  },
  methods: {
    lol () {
      alert('hello')
    }
  }
}
</script>
