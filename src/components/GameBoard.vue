<template>
    
</template>

<script>
export default {
  template: '#game-board-template',
  props: ['checkers', 'rowCount', 'colCount'],
  components: {
    BoardColumn,
  },

  data() {
    return {
      patternId: 'cell-pattern',
      maskId: 'cell-mask',
      cellSize: 100,
    };
  },

  computed: {
    pattern() { return cssUrl(this.patternId); },
    mask() { return cssUrl(this.maskId); },

    rows() { return range(this.rowCount); },
    cols() { return range(this.colCount); },

    boardWidth() { return this.colCount * this.cellSize; },
    boardHeight() { return this.rowCount * this.cellSize; },
    checkerRadius() { return this.cellSize * 0.45; },
  },

  methods: {
    checkerStack(col) {
      return Object.values(this.checkers).filter(c => c.col === col)
        .sort((a, b) => a.row - b.row);
    },
    drop(data) {
      this.$emit('drop', data);
    }
  }
}
</script>