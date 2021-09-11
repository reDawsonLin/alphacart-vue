<template >
  <div class="popupModal">
    <div class="mainModal">
      <div class="modalNav">
        <div class="title">結帳</div>
        <div class="cancel" @click.stop.prevent="closeModal">X</div>
      </div>
      <div class="dedtails">
        <div class="detail">
          {{ initialUser }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popupModal {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  .mainModal {
    position: relative;
    max-width: 37%;
    max-height: 70%;
    padding: 2rem;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    border-radius: 0.5rem;
    z-index: 100;
  }
  .modalNav {
    display:flex;
    justify-content: space-between;
    margin: 0.5rem 0;
  }
  .cancel {
    cursor: pointer;
  }

}
</style>

<script>
export default {
  props: {
    initialProducts: {
      type: Array,
      required: true,
    },
    initialUser: {
      type: Object,
      required: true,
    },
    initialTotalCost: {
      type: Number,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("finalStepSubmit");
    },
  },
};
</script>
