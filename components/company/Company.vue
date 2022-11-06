<template>
  <div id="company">
    <div class="container">
      <div class="title-wrapper">
        <h2>COMPANY</h2>
        <div class="line" />
      </div>
      <div class="item">
        <div class="label">
          会社名
        </div>
        <div class="info">
          株式会社Hungry Dog
        </div>
      </div>
      <div class="item">
        <div class="label">
          設立
        </div>
        <div class="info">
          2021.10.21
        </div>
      </div>
      <div class="item">
        <div class="label">
          資本金
        </div>
        <div class="info">
          ¥4000,000
        </div>
      </div>
      <div class="item">
        <div class="label">
          住所
        </div>
        <div class="info">
          東京都渋谷区恵比寿2-37-8グランデュオ広尾602
        </div>
      </div>
      <div class="item">
        <div class="label">
          代表
        </div>
        <div class="info">
          永松良太
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {}
})
</script>
<style scoped lang="scss">
#company {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px;
  background-image: url('@/assets/img/company-bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
  @include mq(md) {
    padding: 30px;
  }
}

.container {
  max-width: 960px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $white;
  padding: 60px;
  @include mq(md) {
    padding: 2rem 1rem;
  }
}

.title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  font-size: 3rem;
  font-weight: 700;
  @include mq(md) {
    font-size: 2rem;
  }
}

.line {
  width: 100px;
  height: 3px;
  background-color: $black-100;
  margin: 10px 0;
}

.item {
  width: 90%;
  height: 64px;
  display: flex;
  align-items: center;
  background-image : linear-gradient(to right, #000, #000 2px, transparent 2px, transparent 8px);  /* 幅2の線を作る */
  background-size: 8px 1px;          /* グラデーションの幅・高さを指定 */
  background-position: left bottom;  /* 背景の開始位置を指定 */
  background-repeat: repeat-x;
  margin-top: 1rem;
}

.label {
  width: 30%;
  text-align: center;
  font-weight: 700;
  @include mq(md) {
    width: 20%;
  }
}

.info {
  width: 50%;
  text-align: center;
  font-weight: 700;
  @include mq(md) {
    width: 80%;
  }
}
</style>
