<template>
  <div class="circle-bg" :style="{zIndex: zindex}">
    <span>Follow us</span>
    <a href="https://instagram.com/hungrydog_official/" target="_blank" rel="noopener noreferrer" class="sns-icon">
      <SvgIcon type="Instagram" />
    </a>
    <a href="https://twitter.com/hungrydog_tokyo" target="_blank" rel="noopener noreferrer" class="sns-icon">
      <SvgIcon type="Twitter" />
    </a>
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
    zindex: {
      type: Number,
      default: 110
    }
  }
})
</script>

<style scoped lang="scss">
.circle-bg {
  width: 230px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 26px;
  background-color: rgba($white, 40%);
  position: absolute;
  right: 250px;
  top: 19px;
  @include mq(xl) {
    display: none;
  }
  span {
    font-weight: 700;
    margin-left: 1rem;
  }
}

.sns-icon {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: $black-100;
  margin-left: 1rem;
  cursor: pointer;
  .svg-icon {
    fill: $white;
  }
}
</style>
