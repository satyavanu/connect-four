<template id="game-modal-template">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <img src="https://img.icons8.com/bubbles/200/000000/trophy.png" />
          <h4>CONGRATULATIONS!</h4>
          <h5>
            <strong>Player{{ winner.player }}</strong>
          </h5>
          <button @click="$emit('close')">
            Reset Game
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'GameModal',
  props: {
    winner: null
  }
}
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;

  & .modal-wrapper {
    display: table-cell;
    vertical-align: middle;

    & .modal-container {
      width: 300px;
      margin: 0px auto;
      padding: 20px 30px;
      background-color: #fff;
      border-radius: 2px;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      transition: all 0.3s ease;
      font-family: Helvetica, Arial, sans-serif;

      & button {
        padding: 20px;
        background-color: gray;
        color: #000;
      }
    }
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
