// ListOne.vue
<template>
  <div class="container">
    <div class="row fixed-top">
        <h2>{{title}}</h2>
    </div>
    <div class="row">
      <center>
        <div v-for="item in products" :key="item.name">
            <div class="product-list1">
                <p class="item link-btn" @click="goto(item.type)">{{item.type}}</p>
            </div>
        </div>
      </center>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListOne",
  data() {
    return {
      title: "Home Page.click on the product to view the list.",
    }
  },
  computed: {
    /**@prop -computed 
     * @description - The store data can be accessed through the computed property */
    products() {
      return this.$store.state.products;
    },
    saleProducts() {
       return this.$store.getters.saleProducts;
    }
  },
  methods: {
    goto(page) {
      let _page="/2/"+page;
      this.$router.push(_page);
    }
  }
};
</script>