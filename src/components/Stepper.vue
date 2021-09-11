<template>
  <section class="stepper-panel" id="step-control">
    <h2 id="title" class="stepper-title">結帳</h2>
    <div id="stepper" class="main-stepper">
      <div class="container stepper-container">
        <div class="step" :class="{
          active: this.$route.name === 'detail',
          checked: this.$route.name !== 'detail',
        }">
          <span class="step-circle"></span>
          <span class="step-label">寄送地址</span>
        </div>
        <div class="step" :class="{
          active: this.$route.name === 'delivery',
          checked: this.$route.name === 'payment',
        }">
          <span class="step-circle"></span>
          <span class="step-label">運送方式</span>
          <span class="step-line"></span>
        </div>
        <div class="step" :class="{ active: this.$route.name === 'payment' }">
          <span class="step-circle"></span>
          <span class="step-label">付款資訊</span>
          <span class="step-line"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "./../assets/scss/stepper.scss"
</style>
