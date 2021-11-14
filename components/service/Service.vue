<template>
  <div class="service">
    <div class="title">
      SERVICE
    </div>
    <div class="text">
      Hungry Dogは幅広い戦略立案を一気通貫でご支援
    </div>
    <div class="top-container">
      <TopContents />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TopContents from '@/components/service/TopContents.vue'

export default Vue.extend({
  components: {
    TopContents
  }
})
</script>

<style scoped lang="scss">
.service {
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  position: relative;
  margin-top: 80px;
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
}

.top-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 60px;
}
</style>
