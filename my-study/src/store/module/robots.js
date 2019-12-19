import axios from 'axios';

// nên tách từng cái const ra file js riêng -> google, tách riêng thì trong mutation là chữ in, tương tự reducer ReactJS
const state = {
    items: [],
    parts: null,
    foo: 'robot-foo'
}

const mutations = {
    addRobotToCart(state, robot) {
        state.items.push(robot);
    },
    updateParts(state, parts) {
        state.parts = parts;
    },
}

const actions = {
    getParts({commit}) {
        axios.get('/api/parts')
        .then(results => commit('updateParts', results.data))
        .catch(console.error);
    },
    addRobotToCart( {commit, state}, robot) {
        const cart = [...state.items, robot];
        axios.post('/api/cart', cart)
          .then(() => commit('addRobotToCart',robot))
          .catch(console.error);
    }
}

const getters = {
    cartSaleItems(state) {
        return state.items.filter(item => item.head.onSale);
    },
    foo(state) {
        return `robots-getter/${state.foo}`;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
