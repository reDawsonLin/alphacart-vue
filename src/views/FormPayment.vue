<template>
  <div class="part part-payment">
    <h3 class="title">付款資訊</h3>
    <div class="form-row">
      <label for="">持卡姓名</label>
      <input
        v-model="user.cardName"
        id="card-name"
        type="text"
        placeholder="Rock Rock"
        required
      />
    </div>
    <div class="form-row">
      <label for="">卡號</label>
      <input
        v-model="user.cardNum"
        id="card-num"
        type="number"
        min="0"
        placeholder="1111 2222 3333 4444"
        required
      />
    </div>
    <div class="form-wrapper">
      <div class="form-row">
        <label for="">有效期限</label>
        <input
          v-model="user.goodThru"
          id="card-date"
          type="text"
          placeholder="MM/YY"
          maxlength="4"
          required
        />
      </div>
      <div class="form-row">
        <label for="">CVC/CCV</label>
        <input
          v-model="user.CVC"
          id="card-cvc"
          type="text"
          placeholder="123"
          required
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialUser: {
      type: Object,
      default: () => ({
        cardName: "",
        cardNum: "",
        goodThru: "",
        CVC: "",
      }),
    },
  },
  data() {
    return {
      user: this.initialUser,
    };
  },
};
</script>