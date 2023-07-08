import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router';
import vuetify from './plugins/vuetify'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
// Dialog list order view
import 'gitart-vue-dialog/dist/style.css'
import { GDialog } from 'gitart-vue-dialog'
// 
import LoginForm from '@/components/form/LoginForm.vue'
import SideBar from '@/components/aside/SideBar';
import BaseSideBar from '@/components/aside/BaseSideBar';
import HeaderComponent from '@/components/widget/header/HeaderComponent';
import CategoryListTable from '@/components/table/CategoryListTable';
import ProductListTable from '@/components/table/ProductListTable';
import OrderListTable from '@/components/table/OrderListTable';
import ProductCard from '@/components/widget/card/ProductCard';
import CategoryForm from '@/components/form/CategoryForm';	
import PrimaryButton from '@/components/widget/button/PrimaryButton';
import DangerButton from '@/components/widget/button/DangerButton';

const app = createApp(App);
const pinia = createPinia();

// Components
app.component('base-side-bar', BaseSideBar);
app.component('side-bar', SideBar);
app.component('header-component', HeaderComponent);
app.component('product-card', ProductCard);

// Buttons
app.component('primary-button', PrimaryButton);
app.component('danger-button', DangerButton);

// Restaurant owner component
app.component('category-form', CategoryForm)
app.component('category-list-table', CategoryListTable)
app.component('product-list-table', ProductListTable)

// Cashier component
app.component('order-list-table', OrderListTable)
// Waiter component
import NavWaiterComponent from './components/nav/NavWaiterComponent.vue';
app.component('nav-waiter-component', NavWaiterComponent);

// Login component
app.component('login-form', LoginForm);

app.use(router).use(vuetify).use(pinia).mount('#app')

// Dialog of list orders
app.component('GDialog', GDialog)
app.use(router).use(vuetify).use(pinia).mount('#app')
