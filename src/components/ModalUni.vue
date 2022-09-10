<template>
  <div class="popup">
    <div class="popup__inner">
        <slot/>
      <button
          class="popup__close"
          @click="$parent.closePopup()">
           Close
      </button>
    </div>

  </div>
</template>

<script>

export default {
  name: "ModalUni",
}

</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  .popup__inner {
    background: #ffffff;
    padding: 3rem;

  }
  .popup__close {
    border: none;
    background: none;
    color: #980440;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 10px;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #ffffff;
      background-color: #980440;
    }
  }
}
</style>