import Vue from 'vue';
import VueRouter from 'vue-router';
import TestForm from '../../vnrForms/testForm/TestForm.vue';  // Đảm bảo đường dẫn đến các component là chính xác

Vue.use(VueRouter);  // Đảm bảo bạn đã gọi Vue.use(VueRouter)

const routes = [
  {
    path: '/testform',
    name: 'TestForm',
    component: TestForm
  },
//   {
//     path: '/about',
//     name: 'About',
//     component: () => import('../components/About.vue') // Sử dụng lazy loading để import component
//   }
];

const router = new VueRouter({
  mode: 'history',  // Sử dụng mode history để loại bỏ dấu #
  routes
});

export default router;
