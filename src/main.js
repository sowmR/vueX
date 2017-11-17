// main.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store/store.js';

/** Components */
import ListOne from './components/ListOne.vue';
import ListTwo from './components/ListTwo.vue';

Vue.use(VueRouter);
const routes = [
    { path: "/", component: ListOne },
    { path: "/2", component: ListTwo }
];

const router = new VueRouter({
    routes: routes,
    mode: "history", // this will remove # from the router
});
new Vue({
    el: '#app',
    store: store,
    router,
    render: h => h(App)
});