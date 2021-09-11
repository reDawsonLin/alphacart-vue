<template>
  <div class="control-panel" id="btn-control">
    <router-link :to="{ name: preStep() }">
      <button
        class="btn btn-pre"
        id="btn-pre"
        v-if="this.$route.name !== 'detail'"
      >
        上一步
      </button></router-link
    >

    <router-link :to="{ name: nextStep() }">
      <button 
        class="btn btn-next" 
        id="btn-next"
        v-if="this.$route.name !== 'payment'"
      >
      下一步
      </button></router-link>
    
    <button 
      class="btn btn-next" 
      id="btn-next"
      v-if="this.$route.name === 'payment'"
      @click.stop.prevent="finalCheck"
    >
    送出申請
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    nextStep() {
      if (this.$route.name === "detail") {
        return "delivery";
      } else if (this.$route.name === "delivery") {
        return "payment";
      } else {
        return null;
      }
    },
    preStep() {
      if (this.$route.name === "payment") {
        return "delivery";
      } else if (this.$route.name === "delivery") {
        return "detail";
      } else {
        return null;
      }
    },
    finalCheck() {
      console.log('check')
      this.$emit("finalCheckSubmit")
    }
    

  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/controlBtn.scss";
</style>