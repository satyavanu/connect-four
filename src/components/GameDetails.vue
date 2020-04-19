
<template id="game-details-template">
  <div class="details">

    <h2>Connect Four </h2>
    <div class=""> 
      <span class="circle yellow"> P1</span>
      <span class="name"> Human</span>
    </div>
    <div class="">
      <span :style="{background: settings.color}" class="circle"> P2</span>
      <span class="name">{{settings.name}}</span>
    </div>
    <div class="">
      <dl>
        <dt>Game Rules</dt>
          <dd>Computer disc color auto generated</dd>
          <dd>4 same colors discs WINS</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameDetails',
  props: {
    settings: Object
  }
}
</script>

<style lang="scss" scoped>
 dl {
   color: red
    & dt {
      color: green;
    }
 }
</style>