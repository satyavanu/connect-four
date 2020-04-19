<template>
    <div id="game-container">
        <div :key="row"
            v-for="row in rows" class="row">
            <div :key="col" v-for="col in cols" class="col"
                :class="`${row}${col}`"
                :ref="`${row}${col}`"
                @click="drop(row, col)">
            </div>
        </div>
    </div>
</template>


<script>
import { mapState } from 'vuex';
export default {
    name: 'GameContainer',
    data: () => ({
        gameBoard: [ [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]],
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
    props: {
        rows: Array,
        cols: Array,
        settings: Object
    },
    mounted() {
        this.color[true] = this.settings.color || 'green';
    },
    computed: mapState(['aiMove']),
    watch: {
       aiMove(newValue, oldValue) {
          let { row, col }  = newValue;
          console.log('i can move on', row, col)
        }
    },
    methods: {
        playPc (i,c) {
           console.log('pc turn');
           this.$store.dispatch({
                type: 'getMove',
                stats:  {
                    board: this.gameBoard,
                    row: i
                }
            });
           let temp =  this.gameBoard[i].filter((v,i) => { if(v==0) return i});
           let random = Math.floor(Math.random()*temp.length);
           this.drop(i, random);
        },
        drop(r,c, pc) {
            
            this.mate = !this.mate;
            let rows = this.rows.length;
            let cols = this.cols.length;

            if(this.gameBoard[r][c] === 0 && this.gameBoard[rows -1][c] === 0) {
                this.gameBoard[rows -1][c] = this.player[this.mate];
                this.$refs[`${rows-1}${c}`][0].style.backgroundColor = this.color[this.mate];
                this.$emit('doWeHaveAWinner', { 
                    board: this.gameBoard, 
                    r: rows-1, 
                    c,
                    player: this.player[this.mate]
                });
            }         
            else {
                for(let i = rows-1 ; i >= 0; i--) {
                    if(this.gameBoard[i][c]===0) {
                        this.gameBoard[i][c] = this.player[this.mate];
                        this.$refs[`${i}${c}`][0].style.backgroundColor = this.color[this.mate];
                        this.$emit('doWeHaveAWinner', { 
                            board: this.gameBoard, 
                            r: i, 
                            c,
                            player: this.player[this.mate]
                        });
                        if(!this.mate)  {
                            console.log('i m next pc',  this.player[this.mate]);
                            this.playPc(r,c);
                        }
                        return;
                    }
                }
            }
           
            if(!this.mate)  {
               console.log('i m next pc',  this.player[this.mate]);
               this.playPc(r,c);
            }
        }
    }
}
</script>


<style lang="scss">

.row {
  display: table-row;
  background: #5a6673;
}
.col {
    width: 25px;
    height: 25px;
    display: table-cell;
    background-color: white;
    border-radius: 50%;
    display: inline-block;
    padding: 10px;
    margin: 10px;
    
}
.yellow {
    animation: drop 0.9s;
  background-color: yellow;
  
}

.blue {
  background-color: blue;
}


@keyframes drop {
  0% {
    
  }
  20% {
    
    opacity: 1;
  }
  40%, 45% {
    opacity: 1;
  }
  to {
    opacity: 1;
  }
}

</style>
