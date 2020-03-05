<template>
  <div class="grid"></div>
</template>

<script>
export default {
  name: 'TheGame', // You just lost it
  components: {},
  data: () => ({}),
  props: {
    winCheckStrategy: Function
  },
  methods: {
    doWeHaveAWinner() {
      const winner = 0 // this.winCheckStrategy(rows)
      if (winner > 0) {
        this.$emit('win', { player: winner })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  margin: 2rem auto;
  padding-top: 1rem; // space for indicator
  position: relative;
}
</style>
