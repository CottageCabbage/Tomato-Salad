<template>
  <nav id="leftNavBar">

    <router-link to="/Inputs" class="changeViewsBtn" v-show="timerRunning == false">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <g transform="matrix(3.4285714285714284,0,0,3.4285714285714284,0,0)"><g>
        <path d="M10.5,3.5a3.5,3.5,0,0,1-7,0V.5h7Z" style="fill: none;stroke-linecap: round;stroke-linejoin: round"></path>
        <path d="M10.5,10.5a3.5,3.5,0,0,0-7,0v3h7Z" style="fill: none;stroke-linecap: round;stroke-linejoin: round"></path>
        <line x1="1.5" y1="0.5" x2="12.5" y2="0.5" style="fill: none;stroke-linecap: round;stroke-linejoin: round"></line>
        <line x1="1.5" y1="13.5" x2="12.5" y2="13.5" style="fill: none;stroke-linecap: round;stroke-linejoin: round"></line>
        </g></g>
      </svg>
    </router-link>

    <router-link to="/Timer" class="changeViewsBtn" v-show="timerRunning == true">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="rotate">
        <g transform="matrix(3.4285714285714284,0,0,3.4285714285714284,0,0)"><g>
        <path d="M10.5,3.5a3.5,3.5,0,0,1-7,0V.5h7Z" style="fill: none;stroke-linecap: round;stroke-linejoin: round"></path>
        <path d="M10.5,10.5a3.5,3.5,0,0,0-7,0v3h7Z" style="fill: none;stroke-linecap: round;stroke-linejoin: round"></path>
        <line x1="1.5" y1="0.5" x2="12.5" y2="0.5" style="fill: none;stroke-linecap: round;stroke-linejoin: round"></line>
        <line x1="1.5" y1="13.5" x2="12.5" y2="13.5" style="fill: none;stroke-linecap: round;stroke-linejoin: round"></line>
        </g></g>
      </svg>
      <span>!</span>
    </router-link>

    <router-link to="/Stopwatch" class="changeViewsBtn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <g transform="matrix(3.4285714285714284,0,0,3.4285714285714284,0,0)"><g>
        <circle cx="7" cy="8" r="5.5" style="fill: none;stroke-linecap: round;stroke-linejoin: round"></circle>
        <line x1="5.5" y1="0.5" x2="8.5" y2="0.5" style="fill: none;stroke-linecap: round;stroke-linejoin: round"></line>
        <line x1="7" y1="0.5" x2="7" y2="2.5" style="fill: none;stroke-linecap: round;stroke-linejoin: round"></line>
        <polyline points="5.5 6 7 8 9.5 8" style="fill: none;stroke-linecap: round;stroke-linejoin: round"></polyline>
        <line x1="12" y1="2" x2="13" y2="3" style="fill: none;stroke-linecap: round;stroke-linejoin: round"></line>
        <line x1="2" y1="2" x2="1" y2="3" style="fill: none;stroke-linecap: round;stroke-linejoin: round"></line>
        </g></g>
      </svg>
    </router-link>

    <router-link to="/Presets" class="changeViewsBtn">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    </router-link>

    <router-link to="/Settings" class="changeViewsBtn">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </router-link>
  </nav>
</template>

<script>
export default {
  props: ['timerRunning'],
  name: 'Sidebar'
}
</script>

<style>
a {
  position: relative;
}
.rotate + span {
  position: absolute;
  bottom: -5px;
  right: -4px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  text-align: center;
  background: #ff3b52;
}
</style>
