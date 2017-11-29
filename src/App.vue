// App.vue
<template>
  <div class="container">
    <div class="row fixed-top">
        <h1>Welcome to App Component.</h1>
    </div>
    <div class="nav nav-horizontal fixed-top">
        <ul>
            <li><router-link class="item" to="/">Home</router-link> </li>
            <li><router-link class="item" to="/2/Product1">List2</router-link> </li>
            <li><router-link class="item" to="/3/Product3">List3</router-link> </li>
        </ul>
    </div>
    <div class="row">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            obj_list:{
                name:'Sample item name',
                id: 2,
                value: '$20.00'
            }
         }
    }
}
</script>