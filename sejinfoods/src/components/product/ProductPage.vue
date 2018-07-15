<template>
  <section class="bg-light" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">제품정보</h2>
          <h3 class="section-subheading text-muted">건강한 청국장을 400g부터 2kg까지 고객의 니즈에 맞춰 제공합니다.</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-6 portfolio-item" v-for="list in productList" :key=list.no>
          <a class="portfolio-link" data-toggle="modal" @click="productDetail(list)">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" :src="'src/img/portfolio/' +list.img + list.mainImg + '.JPG'" alt="">
          </a>
          <div class="portfolio-caption">
            <h4 v-html="list.weight"></h4>
            <p class="text-muted" v-html="list.ingredients"></p>
          </div>
        </div>
      </div>
      <product-detail-page></product-detail-page>
    </div>
  </section>  
</template>

<script>
import ProductDetailPage from './ProductDetailPage.vue';
import eventInstance from '../../EventInstance';

export default {
  name : 'ProductPage',
  components: { ProductDetailPage },
  data: function(){
    return {
      productList : [
        { no:1001, img:'1kg/', count:6, mainImg:'2', weight:'1kg', name:'포천청국장', type:'청국장', serialNum:'19950372236-4', origin:'미국산', package:'p.v.c', ingredients:'대두(미국산)97%, 재제염(수입산)3%, 정제수', store:'직사광선을 피하고 시원한곳. 파리(위생해충)에 노출되지 않게 보관바랍니다.', refund:'※ 유통과정 중 훼손되었거나 변질된 제품은 구입처나 본사에서 항상 반품 및 교환해 드립니다.' },
        { no:2001, img:'1.8kg/', count:7, mainImg:'3', weight:'1.8kg', name:'포천청국장', type:'청국장', serialNum:'19950372236-4', origin:'미국산', package:'p.v.c', ingredients:'대두(미국산)97%, 재제염(수입산)3%, 정제수', store:'직사광선을 피하고 시원한곳. 파리(위생해충)에 노출되지 않게 보관바랍니다.', refund:'※ 유통과정 중 훼손되었거나 변질된 제품은 구입처나 본사에서 항상 반품 및 교환해 드립니다.' },
        { no:3001, img:'2kg/', count:8, mainImg:'8', weight:'2kg', name:'포천청국장', type:'청국장', serialNum:'19950372236-4', origin:'미국산', package:'p.v.c', ingredients:'대두(미국산)97%, 재제염(수입산)3%, 정제수', store:'직사광선을 피하고 시원한곳. 파리(위생해충)에 노출되지 않게 보관바랍니다.', refund:'※ 유통과정 중 훼손되었거나 변질된 제품은 구입처나 본사에서 항상 반품 및 교환해 드립니다.' },
        { no:4001, img:'0.4kg/', count:10, mainImg:'4', weight:'400g', name:'포천청국장', type:'청국장', serialNum:'19950372236-4', origin:'미국산', package:'p.v.c', ingredients:'대두(미국산)97%, 재제염(수입산)3%, 정제수', store:'직사광선을 피하고 시원한곳. 파리(위생해충)에 노출되지 않게 보관바랍니다.', refund:'※ 유통과정 중 훼손되었거나 변질된 제품은 구입처나 본사에서 항상 반품 및 교환해 드립니다.' },
      ]
    }
  },
  methods:{
    productDetail : function(list) {
      eventInstance.$emit('product-detail', list);
    }
  }
}
</script>
