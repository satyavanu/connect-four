<template>
  <div id="the-game">
    <div class="container">
      <div class="leftcolumn">
        <GameContainer
          ref="GameContainer"
          :rows="x"
          :cols="y"
          :settings="settings"
          @doWeHaveAWinner="doWeHaveAWinner"
        />
      </div>
      <div class="rightcolumn">
        <GameDetails :settings="settings" />
      </div>
    </div>
  </div>
</template>

<script>
import GameContainer from '@/components/GameContainer'
import GameDetails from '@/components/GameDetails'
import { GameSettingsModel } from '@/store/game.model'

const range = val => [...Array(val).keys()]

export default {
  name: 'TheGame', // You just lost it
  components: {
    GameContainer,
    GameDetails
  },
  props: {
    winCheckStrategy: Function,
    settings: GameSettingsModel
  },
  data: () => ({
    game: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ]
  }),
  computed: {
    x: () => range(6),
    y: () => range(7)
  },
  methods: {
    doWeHaveAWinner(rows) {
      const winner = this.winCheckStrategy(rows) || 0
      if (winner > 0) {
        this.$emit('win', { player: winner })
      }
    }
  }
}
</script>

<style lang="scss">
.container {
  display: flex;
  justify-content: center;

  & .rightcolumn {
    text-align: initial;
    padding-left: 20px;

    & .circle {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      display: inline-block;
      padding: 10px;
      margin: 10px;
      color: white;
      font-weight: bold;
    }
    & .yellow {
      background: yellow;
    }
  }

  & .leftcolumn {
    & .row {
      display: table-row;
      background: #5a6673;
    }
    & .col {
      width: 40px;
      height: 40px;
      background-color: white;
      border-radius: 50%;
      display: inline-block;
      padding: 10px;
      margin: 10px;
    }
    & .yellow {
      background-color: yellow;
    }
  }
}
</style>
