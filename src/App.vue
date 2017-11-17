// App.vue
<template>
  <div class="container">
    <div class="row fixed-top">
        <h1>Welcome to App Component.</h1>
    </div>
    <div class="nav nav-horizontal fixed-top">
        <ul>
            <li><router-link class="item" to="/">Home</router-link> </li>
            <li><router-link class="item" to="/2">List2</router-link> </li>
        </ul>
    </div>
    <div class="row">
        <router-view></router-view>
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
        return { }
    }
}
</script>