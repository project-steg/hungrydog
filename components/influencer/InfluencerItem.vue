<template>
  <div class="influencer-item">
    <div class="img-wrapper">
      <div class="main-sns">
        <SvgIcon :type="influencer.mainSns[0]" />
        <span>{{ influencer.mainSns[0] }}</span>
      </div>
      <img src="http://placekitten.com/200/300" alt="">
      <div class="eng-name">
        {{ influencer.engName }}
      </div>
    </div>
    <div class="name-wrapper">
      <div class="name">
        {{ influencer.name }}
      </div>
      <div class="sns-icons">
        <a v-if="influencer.instagramUrl" :href="influencer.instagramUrl" target="_blank" rel="noopener noreferrer" class="sns-icon">
          <SvgIcon type="Instagram" />
        </a>
        <a v-if="influencer.twitterUrl" :href="influencer.twitterUrl" target="_blank" rel="noopener noreferrer" class="sns-icon">
          <SvgIcon type="Twitter" />
        </a>
      </div>
    </div>
    <div class="line" />
    <div class="intro-text">
      {{ influencer.introText }}
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import SvgIcon from '@/components/common/SvgIcon.vue'

export default Vue.extend({
  components: {
    SvgIcon
  },
  props: {
    influencer: {
      type: Object,
      default: () => {}
    }
  }
})
</script>
<style scoped lang="scss">
.influencer-item {
  width: 300px;
  display: flex;
  flex-direction: column;
}

.img-wrapper {
  width: 100%;
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
    width: 70%;
    text-align: center;
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

.name-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.name {
  font-size: 1.2rem;
  font-weight: 500;
}

.sns-icons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.sns-icon {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: $black-100;
  margin-left: 0.5rem;
  cursor: pointer;
  .svg-icon {
    width: 1rem;
    height: 1rem;
    align-items: center;
  }
}

.line {
  background:linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,1) 55%, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0) 100%) 0% 0%;
  background-size:9px 1px;
  width: 100%;
  height: 1px;
}

.intro-text {
  padding-top: 1rem;
}
</style>
