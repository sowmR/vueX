/**store.js
 * @namespace store.js
 * @description -  Here is where the shared data are stored and manipulated.
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    /** state = central location where the data are stored */
    state: {
        products: [
            { name: 'item10', price: 20 },
            { name: 'item11', price: 30 },
            { name: 'item12', price: 10 },
            { name: 'item13', price: 22 }
        ],
    },
    /** getters are used to create properties computed on the data 
     * Here we pass the state as parameter
     */
    getters: {
        saleProducts: state => {
            /** this will map the product data to the variable here.
             * This will create sale value of 50% on the product price.
             */
            let prod = state.products.map(product => {
                return {
                    name: '**' + product.name + '**',
                    price: product.price / 2
                }
            });
            return prod;
        }
    },
    /**
     * Mutations are used to make the changes to the data trackable.
     * the mutation functions can be tracked in the developer tool. 
     * Mutations is the best place to edit the data than directly from the computation.
     * Limitations: mutation is not good with the asyn data.
     */
    mutations: {
        reducedPrice: (state, payload) => {
            state.products.forEach(product => {
                product.price -= payload;
            });
        }
    },
    /** action - used when asyncronous task to be performed on the data.
     * @param {object} context - it is the state 
     * @param {String | number | object} - payload - this is the parameter passed in the function.
     */
    actions: {
        reducedPrice: (context, payload) => {
            setTimeout(function() {
                //call the mutation task;
                context.commit('reducedPrice', payload);
            }, 2000);
        }
    }
});
export default store;