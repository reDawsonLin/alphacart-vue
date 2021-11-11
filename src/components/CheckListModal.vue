<template >
  <div class="popupModal">
    <div class="mainModal">
      <div class="modalNav">
        <div class="title">結帳</div>
        <div class="cancel" @click.stop.prevent="closeModal">X</div>
      </div>
      <div class="dedtails">
        <div class="detail">
          <ul>
            <li>訂購人：{{ initialUser.name }}</li>
            <li>連絡電話：{{ initialUser.tel }}</li>
            <li>Email：{{ initialUser.email }}</li>
            <li>
              <p>寄送地址：</p>
              <span>{{ initialUser.city }} {{ initialUser.address }}</span>
            </li>
            <li>
              購買商品：<br />
              <div v-show="initialProducts[1].qty >= 1">
                {{ initialProducts[0].name }} * {{ initialProducts[0].qty }}
              </div>
              <br />
              <div v-show="initialProducts[1].qty >= 1">
                {{ initialProducts[1].name }} * {{ initialProducts[1].qty }}
              </div>
            </li>
            <li></li>

            <li>總共金額：$ {{ initialTotalCost }}</li>
          </ul>
          <router-link to="/">
            <button class="btn btn-next" @click="confirmSubmit">
              確認送出
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>


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
    confirmSubmit() {
      this.$emit("finalStepSubmit");
    },
  },
};
</script>

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
    width: 300px;
    padding: 1rem;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    border-radius: 0.5rem;
    z-index: 100;
  }
  .modalNav {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
  }

  .detail {
    display: flex;
    flex-direction: column;
    li {
      margin-top: 5px;
    }
  }
  .cancel {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: $white;
    font-weight: 500;
    background-color: $button-pink;
    border-radius: 7px;
  }
  .btn {
    display: block;
    height: 37px;
    margin-top: 1.5rem;
    border-radius: 8px;
    font-size: 14px;
  }

  .btn-next {
    color: $white;
    background-color: $button-pink;
    font-weight: 500;
    width: 173px;
    margin-bottom: 1em;
    &:hover {
      box-shadow: 1px 1px 5px $light-gray;
    }
  }
}
</style>
