<template>
  <div id="app">
    <!-- <img alt="Aon" src="./assets/logo.png" />
    <HelloWorld msg="Enjoy the exercise!" /> -->
    <GameModal  v-if="showModal" @close="showModal = false"/>
    <TheGame
      v-if="gameLoaded"
      :win-check-strategy="SmartCheckWinStrategy"
      :settings="gameSettings"
      @win="win"
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheGame from './components/TheGame.vue'
import GameModal from '@/components/GameModal'
import { SmartCheckWinStrategy } from './services';
import axios from "axios";

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheGame,
    GameModal
  },
  data: () => ({
    showModal : false,
    gameLoaded: false,
    gameSettings: {},
    defaultGameSettings: {
       name: 'Computer-AI',
       color: 'green'
    }
  }),
  mounted() {
    axios.get('api/settings')
      .then(res => {
        this.gameSettings = res.data || this.defaultGameSettings
        this.gameLoaded = true;
      })
      .catch(res => this.gameSettings = this.defaultGameSettings)
  },
  computed: {
    SmartCheckWinStrategy: () => SmartCheckWinStrategy
  },
  methods: {
    win(player) {
      this.showModal = true;
      console.log('We have a winner', player);
      this.$forceUpdate();
    }
  },
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

.details {
  display: table;
}
</style>
