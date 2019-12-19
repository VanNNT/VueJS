import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../components/HomePage.vue';
import RobotBuilder from '../components/build-robot/RobotBuilder.vue';
import SidebarStandard from '../components/sidebars/SidebarStandard.vue';
import SidebarBuild from '../components/sidebars/SidebarBuild.vue';
import ShoppingCart from '../components/cart/ShoppingCart.vue';
import partsRouter from './parts.js'

Vue.use(Router);

// nên tách router ra từng file .js riêng 
const homeRouter = [
    {
        path: '/',
        name: 'Home',
        components: {
            default: HomePage,
            sidebar: SidebarStandard
        }
    },
    {
        path: '/build',
        name: 'Build',
        components: {
            default: RobotBuilder,
            sidebar: SidebarBuild
        }
    },
    {
        path: '/cart',
        name: 'Cart',
        component: ShoppingCart
    }
]

const routes = [...homeRouter, ...partsRouter];
export default new Router({
    mode: 'history',
    routes
});