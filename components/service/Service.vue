<template>
  <div class="service">
    <div class="number">
      02
    </div>
    <div class="title">
      SERVICE
    </div>
    <div class="text">
      Hungry Dogは幅広い戦略立案を一気通貫でご支援
    </div>
    <div class="top-container">
      <TopContents />
    </div>
    <div class="detail-container">
      <DetailContents />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TopContents from '@/components/service/TopContents.vue'
import DetailContents from '@/components/service/DetailContents.vue'

export default Vue.extend({
  components: {
    TopContents,
    DetailContents
  }
})
</script>

<style scoped lang="scss">
.service {
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.number {
  font-size: 8rem;
  font-weight: 700;
  color: $black-700;
  border-bottom: 4px solid $black-700;
  position: absolute;
  top: 80px;
  right: 80px;
  z-index: 1;
  @include mq(lg) {
    top: 50px;
  }
  @include mq(md) {
    top: 50px;
    right: 20px;
    font-size: 6rem;
  }
}

.title {
  font-size: 2rem;
  font-weight: 700;
  position: relative;
  margin-top: 80px;
  z-index: 2;
  @include mq(md) {
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
  }
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -10px;/*線の上下位置*/
    display: inline-block;
    width: 80px;/*線の長さ*/
    height: 3px;/*線の太さ*/
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);/*位置調整*/
    background-color: $black-100;/*線の色*/
    border-radius: 1.5px;/*線の丸み*/
  }
}

.text {
  margin-top: 40px;
  font-weight: 500;
  z-index: 2;
}

.top-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

.detail-container {
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url('@/assets/img/service-bg.jpg');
  background-repeat: no-repeat;
  margin-top: 60px;
  padding: 60px 0;
}
</style>
