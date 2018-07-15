import Vue from 'vue'
import App from './App.vue'
require('es6-promise').polyfill();

new Vue({
    el: '#app',
    render: h => h(App)
})