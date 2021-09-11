<template>
  <section class="cart-panel cart">
    <div class="container cart-container">
      <h3 class="cart-title">購物籃</h3>
      <div class="cart-panel product-list">
        <div
          class="cart-panel product-list product"
          v-for="product in products"
          :key="product.id"
        >
          <img :src="product.img" alt="" class="product-img" />
          <div class="product-wrapper">
            <div class="product-name">{{ product.name }}</div>
            <div class="cart-btn-wrapper">
              <button
                class="btn-cart minus-button mr-5"
                @click.stop.prevent="qtyMinus(product)"
              >
                -
              </button>
              <div class="item-num">{{ product.qty }}</div>
              <button
                class="btn-cart plus-button ml-5"
                @click.stop.prevent="qtyPlus(product)"
              >
                +
              </button>
            </div>
            <div class="product-price">${{ product.price }}</div>
          </div>
        </div>
      </div>
      <div class="cart-panel amount-panel">
        <div class="cart-panel amount-container delivery">
          <p class="title delivery-title">運費</p>
          <p class="fee selected-delivery-fee">
            {{ delivery === 0 ? "免運費" : "$" + delivery }}
          </p>
        </div>
        <div class="cart-panel amount-container total">
          <p class="title amount-title">小計</p>
          <p class="fee amount-total">${{ initialTotalCost }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "./../assets/scss/shoppingCart.scss";
</style>

<script>
export default {
  props: {
    initialProducts: {
      type: Array,
      required: true,
    },
    delivery: {
      required: true,
    },
    initialTotalCost: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      products: this.initialProducts,
    };
  },

  methods: {
    qtyPlus(product) {
      product.qty += 1;
    },
    qtyMinus(product) {
      if (product.qty === 0) return;
      product.qty -= 1;
    },
  },
};
</script>