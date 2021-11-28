<template>
  <div class="main-visual">
    <div class="header-in-main-visual">
      <div class="circle-bg">
        <span>Follow us</span>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" class="sns-icon">
          <SvgIcon type="Instagram" />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" class="sns-icon">
          <SvgIcon type="Twitter" />
        </a>
      </div>
    </div>
    <div class="contents">
      <div class="num">
        01
      </div>
      <h1>Hungry Dog Inc.</h1>
      <span>is indomitable spirit team.<br>
        We will do our best<br>
        to be your greatest partner.
        <div class="num-s">
          01
        </div>
      </span>
    </div>
    <div class="scroll-bar-position">
      <ScrollBar />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SvgIcon from '@/components/common/SvgIcon.vue'
import ScrollBar from '@/components/mainVisual/ScrollBar.vue'

export default Vue.extend({
  components: {
    SvgIcon,
    ScrollBar
  }
})
</script>
<style scoped lang="scss">
.main-visual {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url('@/assets/img/bg-image.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  object-fit: cover;
  @include mq(xl) {
    justify-content: flex-end;
    background-position: 100% 0;
  }
  @include mq(md) {
    justify-content: flex-end;
    background-position: 80% 0;
  }
}

.header-in-main-visual {
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 250px;
  @include mq(xl) {
    justify-content: flex-start;
    padding: 0 0 0 0.6rem;
  }
  @include mq(md) {
    height: 70px;
    justify-content: flex-start;
    padding: 0;
  }
}

.circle-bg {
  width: 230px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 26px;
  background-color: rgba($white, 40%);
  @include mq(xl) {
    background-color: rgba($white, 0%);
  }
  @include mq(md) {
    width: 200px;
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

.contents {
  display: inline-block;
  margin: 0 0 2.5rem 2.5rem;
  @include mq(md) {
    margin: 0 0 1.25rem 1.25rem;
  }
  .num {
    font-size: 3rem;
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 10px;
    @include mq(xl) {
      display: none;
    }
  }

  .num-s {
    display: none;
    font-size: 1.2rem;
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 4px;
    margin-left: 1.8rem;
    @include mq(xl) {
      display: block;
    }
  }
  h1 {
    font-size: 8rem;
    font-weight: 700;
    @include mq(xl) {
      font-size: 2.5rem;
    }
  }
  span {
    font-size: 4rem;
    font-weight: 700;
    @include mq(xl) {
      font-size: 1.2rem;
      display: flex;
      align-items: flex-end;
    }
  }
}

.scroll-bar-position {
  position: absolute;
  bottom: 40px;
  right: 40px;
  @include mq(md) {
    bottom: 200px;
    right: 10px;
  }
}
</style>
