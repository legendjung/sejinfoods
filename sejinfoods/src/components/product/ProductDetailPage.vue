<template>
<div v-show="modal">
  <div class="portfolio-modal modal fade show" tabindex="-1" role="dialog" style="display: block; padding-right: 22px; z-index:1100">
    <div class="modal-dialog">
      <div class="modal-content">
          <div class="close-modal" data-dismiss="modal" @click="productDetailClose()">
            <div class="lr">
              <div class="rl" ></div>
            </div>
          </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <vueper-slides autoplay arrowsOutside fade slide-content-outside="top" slide-content-outside-class="max-widthed" :slide-ratio="0.8" :initSlide=2>
                  <vueper-slide v-for="i in list.count" :key="i" :image="'src/img/portfolio/' + list.img + i + '.JPG'">
                  </vueper-slide>
                </vueper-slides>
                <h2 class="text-uppercase" v-html="list.weight"></h2>
                <ul class="list-inline">
                    <li style="font-weight : bold;" v-html="list.ingredients"></li>
                    <li v-html="list.store"></li>
                    <li style="color : rgba(29, 209, 89, 0.9);" v-html="list.refund"></li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import eventInstance from '../../EventInstance.js'
import { VueperSlides, VueperSlide } from 'vueperslides'

export default {
  name: 'ProductDetailPage',
  components : { VueperSlides, VueperSlide },
  data: function(){
    return {
      list : {
        no:'', img:'', count:1, mainImg:'', weight:'', name:'', type:'',
        serialNum:'', origin:'', package:'', ingredients:'',
        store:'', refund:''
      },
      modal: false
    };
  },
  created: function(){
    eventInstance.$on('product-detail', this.productDetail);
  },
  methods: {
    productDetail: function(list){
      this.list = list;
      this.modal = true;
    },
    productDetailClose: function(){
      this.list = { count:1 };
      this.modal = false;
    }
  }
}
</script>
