<template>
  <section id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">생산과정</h2>
          <h3 class="section-subheading text-muted">건강하고 안전한 제품을 생산하기 위해 철저한 관리 프로세스를 가지고 있습니다.</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <ul class="timeline">
            <li class="timeline">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid img" src="../img/about/about_1.JPG" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                    <h4 class="subheading">원재료 선정</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">농수산물유통공사를 통해 신선한 원재료를 공급받습니다. 정부기관이 인정한 재료만 엄선하여 사용합니다.</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid img" src="../img/about/about_2.JPG" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                    <h4 class="subheading">석발기 작업</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">석발기를 통해 원재료에 섞여있는 이물질을 제거합니다.</p>
                </div>
              </div>
            </li>
            <li class="timeline">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid img" src="../img/about/about_3.JPG" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 class="subheading">원재료 세척 작업</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">청국장 주 원료인 콩을 수차례 깨끗한 지하수로 세척합니다.</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid img" src="../img/about/about_4.JPG" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 class="subheading">콩 발효 과정</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">청국장의 고유한 맛을 내기 위해 발효과정을 거칩니다.</p>
                </div>
              </div>
            </li>
            <li class="timeline">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid img" src="../img/about/about_5.JPG" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 class="subheading">상품 포장 및 배송</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">고객의 주문에 맞게 안전하게 포장하여 배송합니다.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name : 'AboutPage'
}

</script>

<style scoped>
.img{
  height: 100%;
}
</style>
