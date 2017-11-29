// ListThree.vue
<template>
    <div class="container">
        <div class="row fixed-top">
            <h2>{{title}}</h2>
            <h3> Selected Product Type = {{page_obj.type}}</h3>
        </div>
        <div class="row">
            <div v-for="item in page_obj.list" :key="item.name" class="product-table">
                <div class="column">
                    <span class="item">{{item.name}}</span>
                </div>
                 <div class="column">
                    <span class="item"> {{item.price}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<<script>
export default {
    props:{
        page_obj: {
            type: Object,
        }
    },
    data() {
        return {
            title:' Router with Object parameter',
        };
    },
    computed: {
        products() {
            console.log(this.page_obj);
            return this.page_obj;
        }
    }
}
</script>

