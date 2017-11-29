// ListTwo.vue
<template>
  <div class="container">
    <div class="row fixed-top">
        <h2>List Two:{{id}}</h2>
    </div>
    <div class="row">
        <center>
            <div v-for="item in products.list" :key="item.name">
                <div class="product-table">
                    <div class="column" style="width:30.33%!important">
                        <span class="item">{{item.name}}</span>
                    </div>
                    <div class="column" style="width:30.33%!important">
                        <span class="item"> ${{item.price}}</span>
                        </div>
                    <div class="column" style="width:30.33%!important">
                        <button class="link-btn item" @click="editclick(item)"> Edit</button>
                    </div>
                </div>
            </div>
            
        </center>
    </div>
    
  </div>
</template>

<script>
export default {
    name: "ListTwo",
    data() {
        return {
            baseclass:'column',
        };
    },
    computed: {
        id() {
            /** this params property should match the property name specified in the routes*/
            const retval= this.$route.params.id;
            return retval;
        },
    products() {
        const prod_type = this.id;
        debugger;
        return this.$store.getters.getProductList(prod_type);
    },
    localClass() {
        return {
            width: "33.33% !important",
        };
    }
  },
  methods: {
      reducedPrice(id, value) {
          /** Trigger the action defined in the store.  instead of mutation to handle async task*/
          this.$store.dispatch('reducedPrice', {id:id, value:value});
      },
      editclick(item) {
          this.$router.push('/3/'+ this.id+"/"+item.id);
      }
  }
}
</script>
