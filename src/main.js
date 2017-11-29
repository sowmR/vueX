// main.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store/store.js';

/** Components */
import ListOne from './components/ListOne.vue';
import ListTwo from './components/ListTwo.vue';
import ListThree from './components/ListThree.vue';

Vue.use(VueRouter);

function getObject(route) {
    /** this one maps the router parameter to the corresponding object to be passed to the prop */
    let _input = {
        type: route.params.objectParam,
        id: route.params.product_id
    };
    return {
        page_obj: store.getters.getProduct(_input)
    };
}
const routes = [
    { path: "/", component: ListOne },
    { path: "/2/:id", component: ListTwo }, // routes with parameter.
    { path: "/3/:objectParam/:product_id", component: ListThree, props: getObject }
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