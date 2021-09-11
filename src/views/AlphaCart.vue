<template>
  <div>
    <CheckListModal
      @finalStepSubmit="finalCheckList"
      v-if="ShowCheckingList"
      :initialUser="user"
      :initialTotalCost="totalCost"
      :initialProducts="products"
    />
    <main id="main-app" class="main">
      <Stepper />

      <!-- form -->
      <section class="form-panel">
        <div class="container form-container">
          <form class="main-form form">
            <div class="form-content">
              <router-view :initialUser="user"> </router-view>
            </div>
          </form>
        </div>
      </section>

      <ShoppingCart
        :initialProducts="products"
        :delivery="user.delivery"
        :initialTotalCost="totalCost"
      />

      <ControlBtn @finalCheckSubmit="finalCheckList" />
    </main>
  </div>
</template>

<script>
import Stepper from "../components/Stepper.vue";
import ShoppingCart from "../components/ShoppingCart.vue";
import ControlBtn from "../components/ControlBtn.vue";
import CheckListModal from "../components/CheckListModal.vue";

const STORAGE_KEY = "alphaCartVue";
const STORAGE_ITEM = "alphaCartProductVue";

export default {
  name: "AlphaCart",
  components: {
    Stepper,
    ShoppingCart,
    ControlBtn,
    CheckListModal,
  },
  data() {
    return {
      user: {
        id: -1,
        gender: "",
        name: "",
        tel: "",
        email: "",
        city: "",
        address: "",
        delivery: "0",
        cardName: "",
        cardNum: "",
        goodThru: "",
        CVC: "",
      },
      products: [
        {
          name: "破洞補釘牛仔褲",
          img: "https://i.imgur.com/KrmzyY4.png",
          qty: 1,
          price: 3999,
          id: 1,
        },
        {
          name: "刷色直筒牛仔褲",
          img: "https://i.imgur.com/3Ud4zwL.png",
          qty: 1,
          price: 1299,
          id: 2,
        },
      ],
      ShowCheckingList: false,
    };
  },

  created() {
    this.getStorageData();
  },

  computed: {
    totalCost() {
      let total = 0;
      this.products.map((product) => {
        total += product.qty * product.price;
      });
      total += Number(this.user.delivery);
      return total;
    },
  },

  methods: {
    finalCheckList() {
      this.ShowCheckingList = !this.ShowCheckingList;
    },
    getStorageData() {
      this.user = {
        ...this.user,
        ...JSON.parse(localStorage.getItem(STORAGE_KEY)),
      };
      this.products =
        JSON.parse(localStorage.getItem(STORAGE_ITEM)) || this.products;
    },

    saveStorage() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.user));
      localStorage.setItem(STORAGE_ITEM, JSON.stringify(this.products));
    },
  },
  watch: {
    user: {
      handler: function () {
        this.saveStorage();
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" >
@import "@/assets/scss/form.scss";
</style>
