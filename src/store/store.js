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
        products: [{
                type: 'Product1',
                list: [{ id: '10', name: 'item10', price: 20 },
                    { id: '11', name: 'item11', price: 30 },
                    { id: '12', name: 'item12', price: 10 },
                    { id: '13', name: 'item13', price: 22 }
                ]
            },
            {
                type: 'Product2',
                list: [{ id: '20', name: 'item20', price: 510 },
                    { id: '21', name: 'item21', price: 300 },
                    { id: '22', name: 'item22', price: 120 },
                    { id: '23', name: 'item23', price: 212 }
                ]
            }, {
                type: 'Product3',
                list: [{ name: 'item30', price: 1120 },
                    { name: 'item31', price: 330 },
                    { name: 'item32', price: 1310 },
                    { name: 'item33', price: 2232 }
                ]
            }

        ],
    },
    /** getters are used to create properties computed on the data 
     * Here we pass the state as parameter
     */
    getters: {
        getProductList: state => (type) => {
            /** this will map to the product list of specific type */
            let prod = state.products.find(product => product.type === type);
            return prod;
        },
        getProduct: (state, getter) => (product) => {
            /** this will map to the product list of specific type */
            let prod = getter.getProductList(product.type);
            let retValue = {};

            prod.list.forEach(item => {
                if (item.id === product.id) {
                    retValue = item;
                }
            });
            debugger;
            return retValue;
        },
        saleProducts: state => {
            /** this will map the product data to the variable here.
             * This will create sale value of 50% on the product price.
             */
            let prod = state.products.map(product => {
                product.forEach(list => {
                    return {
                        name: '**' + list.name + '**',
                        price: list.price / 2
                    };
                });
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
            let prodList = state.products.find(product => product.type === payload.id);
            prodList.list.forEach(product => {
                product.price -= payload.value;
            });
        }
    },
    /** action - used when asyncronous task to be performed on the data.
     * @param {object} context - it is the state 
     * @param {String | number | object} - payload - this is the parameter passed in the function.
     * multiple parameters should be sent in as object.
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