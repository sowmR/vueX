// ListTwo.vue
<template>
  <div class="container">
    <div class="row fixed-top">
        <h2>List Two.</h2>
    </div>
    <div class="row">
        <div v-for="item in products" :key="item.name">
            <div class="product-list2">
                <p class="item">{{item.name}} &nbsp; &nbsp; ${{item.price}}</p>
            </div>
        </div>
    </div>
    <!-- Create a button to reduce the price-->
    <button class="button" @click="reducedPrice(4)"> Reduce Price</button>
  </div>
</template>

<script>
export default {
    name: "ListTwo",
    computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
      reducedPrice(value) {
          /** Trigger the action defined in the store.  instead of mutation to handle async task*/
          this.$store.dispatch('reducedPrice', value);
      }
  }
}
</script>
