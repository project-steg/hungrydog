<template>
  <div class="vision">
    <div class="vision-container">
      <h1>VISION</h1>
      <div class="black-background">
        <div class="num">
          04
        </div>
        <div class="container">
          <div class="contents">
            <img src="http://placekitten.com/200/300" alt="">
            <div class="text">
              <b>唯一無二のクリエイティビティな会社を創る</b><br>
              <br>
              株式会社ハングリードッグの永松良太です。<br>
              <br>
              昨今、情報が錯綜しどの業界でも差別化を図る事が難しいです。<br>
              弊社では独自のネットワークや知見を生かし、商品や店舗の個性を最大限引き出し、ユーザーへお届けするサポートをさせていただきます。また、現在 自社メディアを開発中であり 近い将来、ライブコマース事業展開も目指しております。<br>
              <br>
              お客様へより幅広いサポートを出来るよう着手しており 一気通貫の最先端を目指すという目標を掲げ突き進みます。私達はお客様の「最大のパートナー」となれるよう チームスローガンで掲げている"不撓不屈の精神"で 泥臭く、お客様と共に成長を目指します。
            </div>
          </div>
          <div class="ceo-info">
            <span>Ryota Nagamatsu</span>
            <div class="vision-sns-icon">
              <SvgIcon type="Instagram" />
            </div>
          </div>
        </div>
      </div>
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
.vision {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 80px 0;
  @include mq(md) {
    padding: 30px 0;
  }
}

.vision-container {
  max-width: 1680px;
  width: 90%;
  @include mq(xl) {
    width: 100%;
  }
}

h1 {
  font-size: 5rem;
  font-weight: 700;
  line-height: 3rem;
  margin-left: 60px;
  @include mq(lg) {
    font-size: 2.7rem;
    line-height: 1.5rem;
    margin-left: 26px;
  }
}

.black-background {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $black-100;
  padding: 140px 0 110px 0;
  position: relative;
  @include mq(lg) {
    padding: 30px 0 30px 0;
  }
}

.num {
  font-size: 25rem;
  font-weight: 700;
  color: $black-200;
  border-bottom: 4px solid $black-200;
  position: absolute;
  top: 0;
  right: 80px;
  z-index: 1;
  @include mq(lg) {
    font-size: 15rem;
    top: 600px;
  }
}

.container {
  max-width: 1035px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
}

.contents {
  display: flex;
  justify-content: center;
  align-items: center;
  @include mq(lg) {
    flex-direction: column;
    align-items: flex-start;
  }
}

img {
  width: 300px;
  height: 375px;
  object-fit: cover;
  margin-right: 100px;
  @include mq(xl) {
    margin: 0 50px;
  }
  @include mq(lg) {
    margin: 0 0 30px 0;
  }
}

.text {
  max-width: 635px;
  width: 100%;
  color: $white;
  line-height: 30px;
  b {
    font-size: 1.2rem;
    font-weight: 700;
  }
}

.ceo-info {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 30px;
  span {
    color: $white;
    font-weight: 500;
  }
}

.vision-sns-icon {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  background-color: $white;
  border-radius: 20px;
  margin: 0 20px;
}
</style>
<style lang="scss">
.vision-sns-icon {
  .svg-icon {
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
  }
  path {
    fill: $black-100;
  }
}
</style>
