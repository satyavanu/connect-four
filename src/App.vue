<template>
  <div id="app">
    <GameModal 
      v-if="showModal"
      :winner= "player" 
      @close="showModal = false"
    />
    <TheGame
      ref="thegame"
      v-if="gameLoaded"
      :win-check-strategy="SmartCheckWinStrategy"
      :settings="gameSettings"
      @win="win"
    />
  </div>
</template>

<script>
import TheGame from './components/TheGame.vue'
import GameModal from '@/components/GameModal'
import { SmartCheckWinStrategy } from './services';
import axios from "axios";

export default {
  name: 'App',
  components: {
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
  watch: {
   showModal: {
      handler: function(newVal, oldVal) {
        // if reset notify store
        if(oldVal) {
          this.$store.dispatch({type: 'resetGame', payload: true})
        }
      },
      immediate: true
    }
  },
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
      this.player  = player;
      console.log('We have a winner', player);
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
</style>
