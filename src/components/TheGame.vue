<template>
  <div id="the-game">
     <div class="details">
      <div class=""> 
        <span class="circle yellow"> P1</span>
        <span class="name"> Human</span>
      </div>
      <div class="">
        <span :style="{background: settings.color}" class="circle"> P2</span>
        <span class="name">{{settings.name}}</span>
      </div>
    </div>
    <GameContainer
      :rows="x"
      :cols="y"
      :settings="settings"
      @doWeHaveAWinner="doWeHaveAWinner"
    />
  </div>
</template>

<script>
import GameContainer from '@/components/GameContainer';
import GameSettings from '@/components/GameSettings';
import { gameSettingsModel } from '@/store/game.model';

const range = (val) => [...Array(val).keys()];

export default {
  name: 'TheGame', // You just lost it
  components: {
    GameSettings,
    GameContainer
  },
  data: () => ({
  game: [ [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]]
  }),
  props: {
    winCheckStrategy: Function,
    win: Function,
    settings: gameSettingsModel
  },
  computed: {
    x: (rows) => range(6),
    y: (cols) => range(7)
  },
  methods: {
    doWeHaveAWinner(rows) {
      const winner = this.winCheckStrategy(rows) || 0;
      if (winner > 0) {
        console.log('I have a winner', winner);
        this.$emit('win', { player: winner })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#the-game {
  width: 700px;
  margin: 0 auto;
}
.grid {
  margin: 2rem auto;
  padding-top: 1rem; // space for indicator
  position: relative;
}
.row {
  display: table-row;
  background: #5a6673;
}
.col {
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 50%;
    display: inline-block;
    padding: 10px;
    margin: 10px;
}
.yellow {
  background-color: yellow;
}

.circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: inline-block;
    padding: 10px;
    margin: 10px;
    color: white;
    font-weight: bold;
}

.blue {
  background-color: blue;
}

</style>
