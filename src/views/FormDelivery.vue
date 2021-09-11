<template>
  <div class="part part-delivery ">
    <h3 class="title">運送方式</h3>
    <div class="form-row standard-wrapper">
      <div class="inner-wrapper">
        <input
          v-model="user.delivery" 
          id="standard"
          type="radio" 
          name="delivery" 
          class="standard"
          value="0"
        />
        <label for="standard">
          <div class="method">標準運送</div>
          <div class="time">約 3~7 個工作天</div>
        </label>
      </div>
      <span class="delivery-fee">免費</span>
    </div>
    <div class="form-row dhl-wrapper">
      <div class="inner-wrapper">
        <input
          v-model="user.delivery"
          id="dhl" 
          type="radio" 
          name="delivery" 
          class="dhl" 
          value="500"
        />
        <label for="dhl">
          <div class="method">DHL 貨運</div>
          <div class="time">48 小時內送達</div>
        </label>
      </div>
      <span class="delivery-fee">$500</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialUser:{
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.initialUser,
    };
  },
}
</script>