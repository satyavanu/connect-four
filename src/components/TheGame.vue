<template>
  <div id="the-game">
    <div class="container">
      <div class="leftcolumn"> 
        <GameContainer
          :rows="x"
          :cols="y"
          :settings="settings"
          @doWeHaveAWinner="doWeHaveAWinner"
        />
      </div>
      <div class="rightcolumn">
        <GameDetails :settings="settings"/>
      </div>
    </div>
  </div>
</template>

<script>
import GameContainer from '@/components/GameContainer';
import GameDetails from '@/components/GameDetails';
import { gameSettingsModel } from '@/store/game.model';

const range = (val) => [...Array(val).keys()];

export default {
  name: 'TheGame', // You just lost it
  components: {
    GameContainer,
    GameDetails
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

<style lang="scss">
@import "@/assets/styles/variables.scss";
.grid {
  background-color: $primary;
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


.contiainer {
  display: flex;
  justify-content: center;

    .rightcolumn {
      text-align: initial;
      padding-left: 20px;
    }
}

</style>
