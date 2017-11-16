// ListOne.vue
<template>
  <div class="container">
    <div class="row fixed-top">
        <h2>{{title}}</h2>
    </div>
    <div class="row">
        <div v-for="item in saleProducts" :key="item.name">
            <div class="product-list1">
                <p class="item">{{item.name}} &nbsp; &nbsp; ${{item.price}}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListOne",
  data() {
    return {
      title: "List one : sale",
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
  }
};
</script>