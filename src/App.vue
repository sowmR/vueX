// App.vue
<template>
  <div class="container">
    <div class="row fixed-top">
        <h1>Welcome to App Component.</h1>
    </div>
    <div class="row">
        <List-One></List-One>
        <List-Two></List-Two>
    </div>
  </div>
</template>

<script>
import ListOne from './components/ListOne.vue';
import ListTwo from './components/ListTwo.vue';
export default {
    name: "App",
    components: {
        'List-One':ListOne,
        'List-Two':ListTwo
    },
    data(){
        return {
            productList1:[
            {name: 'item10', price: 20},
            {name: 'item11', price: 30},
            {name: 'item12', price: 10},
            {name: 'item13', price: 22},
        ],
        productList2:[
            {name: 'item20', price: 200},
            {name: 'item21', price: 300},
            {name: 'item22', price: 100},
            {name: 'item23', price: 202},
        ]
        }
    }
}
</script>