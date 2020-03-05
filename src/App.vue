<template>
  <div id="app">
    <img alt="Aon" src="./assets/logo.png" />
    <HelloWorld msg="Enjoy the exercise!" />

    <TheGame :win-check-strategy="SmartCheckWinStrategy" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheGame from './components/TheGame.vue'
import { SmartCheckWinStrategy } from './services'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheGame
  },
  data: () => ({}),
  computed: {
    SmartCheckWinStrategy: () => SmartCheckWinStrategy
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
