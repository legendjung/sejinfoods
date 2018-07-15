<template>
  <div id="app">
    <navi-bar></navi-bar>
    <title-page></title-page>
    <service-page></service-page>
    <product-page></product-page>
    <about-page></about-page>
    <contact-page></contact-page>
  </div>
</template>

<script>
import NaviBar from './components/NaviBar.vue';
import TitlePage from './components/TitlePage.vue';
import ServicePage from './components/ServicePage.vue';
import ProductPage from './components/product/ProductPage.vue';
import AboutPage from './components/AboutPage.vue';
import ContactPage from './components/ContactPage.vue';

export default {
  name: 'app',
  components : { NaviBar, TitlePage, ServicePage, ProductPage, AboutPage, ContactPage },
  data () {
    return {
      msg: 'welcome to SejinFoods'
    }
  }
}
</script>

<style>
@import url('vendor/bootstrap/css/bootstrap.css');
@import url('vendor/font-awesome/css/font-awesome.css');
@import url('css/agency.css');
</style>
