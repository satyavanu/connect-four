<template>
  <div id="game-container">
    <div v-for="row in rows" :key="row" :ref="'gc'" class="row">
      <div
        v-for="col in cols"
        :key="col"
        :ref="`${row}${col}`"
        class="col"
        :class="`${row}${col}`"
        @click="drop(row, col)"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'GameContainer',
  props: {
    rows: Array,
    cols: Array,
    settings: Object
  },
  data: () => ({
    gameBoard: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ],
    mate: true,
    player: {
      true: 2,
      false: 1
    },
    color: {
      true: '',
      false: 'yellow'
    },
    waitingForMove: true
  }),
  computed: mapState(['aiMove', 'resetGame']),
  watch: {
    aiMove(newValue) {
      const { row, col } = newValue
      this.drop(row, col)
    },
    resetGame(newValue) {
      if (newValue) {
        this.gameBoard = [
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ]
        const elem = this.$el.querySelectorAll('.col')
        elem.forEach(e => {
          e.removeAttribute('style')
        })
        this.$store.dispatch({ type: 'resetGame', payload: false })
      }
    }
  },
  mounted() {
    this.color[true] = this.settings.color || 'green'
  },
  methods: {
    playPc(i) {
      console.log('ai trun')
      this.$store.dispatch({
        type: 'getMove',
        stats: {
          board: this.gameBoard,
          row: i
        }
      })
    },
    drop(r, c) {
      this.mate = !this.mate
      const rows = this.rows.length

      if (this.gameBoard[r][c] === 0 && this.gameBoard[rows - 1][c] === 0) {
        this.gameBoard[rows - 1][c] = this.player[this.mate]
        this.$refs[`${rows - 1}${c}`][0].style.backgroundColor = this.color[
          this.mate
        ]
        this.$emit('doWeHaveAWinner', {
          board: this.gameBoard,
          r: rows - 1,
          c,
          player: this.player[this.mate]
        })
      } else {
        for (let i = rows - 1; i >= 0; i--) {
          if (this.gameBoard[i][c] === 0) {
            this.gameBoard[i][c] = this.player[this.mate]
            this.$refs[`${i}${c}`][0].style.backgroundColor = this.color[
              this.mate
            ]
            this.$emit('doWeHaveAWinner', {
              board: this.gameBoard,
              r: i,
              c,
              player: this.player[this.mate]
            })
            if (!this.mate) {
              console.log('i m next pc', this.player[this.mate])
              this.playPc(r, c)
            }
            return
          }
        }
      }

      if (!this.mate) {
        console.log('i m next pc', this.player[this.mate])
        this.playPc(r, c)
      }
    }
  }
}
</script>

<style lang="scss"></style>
