<template>
  <div class="influencer-item">
    <div class="img-wrapper">
      <div class="main-sns">
        <SvgIcon type="Instagram" />
        <span>Instagram</span>
      </div>
      <img src="http://placekitten.com/200/300" alt="">
      <div class="eng-name">
        HONOKA
      </div>
    </div>
    <div class="name-wrapper" />
    <div class="line" />
    <div class="intro-text" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import SvgIcon from '@/components/common/SvgIcon.vue'

export default Vue.extend({
  components: {
    SvgIcon
  }
})
</script>
<style scoped lang="scss">
.influencer-item {
  display: flex;
  flex-direction: column;
  margin: 0 30px;
}

.img-wrapper {
  width: 300px;
  height: 375px;
  position: relative;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-sns {
  width: 138px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $black-100;
  position: absolute;
  padding: 0 15px;
  span {
    font-weight: 500;
    color: $white;
  }
}

.eng-name {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  background: $black-100;
  background: linear-gradient(180deg, rgba($black-100, 0) 0%, rgba($black-100,1) 100%);
  font-size: 2rem;
  font-weight: 500;
  color: $white;
  padding: 0 0 10px 15px;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
