<template>
  <div class="main-visual">
    <div class="header-in-main-visual">
      <div class="circle-bg">
        <span>Follow us</span>
        <div class="sns-icon">
          <SvgIcon type="Instagram" />
        </div>
        <div class="sns-icon">
          <SvgIcon type="Twitter" />
        </div>
      </div>
    </div>
    <div class="contents">
      <div class="num">
        01
      </div>
      <h1>Hungry Dog Inc.</h1>
      <span>is indomitable spirit team.<br>
        We will do our best<br>
        to be your greatest partner.</span>
    </div>
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
.main-visual {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url('@/assets/img/bg-image.jpg');
  background-size: cover;
  background-position: top center;
  object-fit: cover;
}

.header-in-main-visual {
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 250px;
}

.circle-bg {
  width: 230px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 26px;
  background-color: rgba($white, 40%);
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
  .svg-icon {
    fill: $white;
  }
}

.contents {
  max-width: 1000px;
  width: 90%;
  margin: 2.5rem;
  .num {
    font-size: 3rem;
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 10px;
  }
  h1 {
    font-size: 8rem;
    font-weight: 700;
  }
  span {
    font-size: 4rem;
    font-weight: 700;
  }
}
</style>
