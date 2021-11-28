<template>
  <div v-if="$route.path == '/'" class="hamburger">
    <div class="openbtn" :class="{active: active}" @click="toggleMenu()">
      <span /><span /><span />
    </div>
    <nav id="g-nav" :class="{panelactive: panelactive}">
      <div id="g-nav-list">
        <!--ナビの数が増えた場合縦スクロールするためのdiv※不要なら削除-->
        <ul>
          <li @click="toggleMenu()">
            <nuxt-link v-scroll-to="toTop" to="/">
              ABOUT
            </nuxt-link>
          </li>
          <li @click="toggleMenu()">
            <nuxt-link v-scroll-to="toService" to="/">
              SERVICE
            </nuxt-link>
          </li>
          <li @click="toggleMenu()">
            <nuxt-link v-scroll-to="toInfluencer" to="/">
              INFLUENCER
            </nuxt-link>
          </li>
          <li @click="toggleMenu()">
            <nuxt-link v-scroll-to="toVision" to="/">
              VISION
            </nuxt-link>
          </li>
          <li @click="toggleMenu()">
            <nuxt-link v-scroll-to="toNews" to="/">
              NEWS
            </nuxt-link>
          </li>
          <li @click="toggleMenu()">
            <nuxt-link v-scroll-to="toCompany" to="/">
              COMPANY
            </nuxt-link>
          </li>
          <li @click="toggleMenu()">
            <nuxt-link v-scroll-to="toContact" to="/">
              CONTACT
            </nuxt-link>
          </li>
        </ul>
        <div class="times-wrapper">
          <span>Oct. 20</span>
          <div class="day-of-week">
            Wed
          </div>
        </div>
      </div>
    </nav>
    <div class="circle-bg" :class="{circleactive: circleactive}" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      active: false as Boolean,
      panelactive: false as Boolean,
      circleactive: false as Boolean,
      toTop: '#main-visual' as String,
      toService: '#service' as String,
      toInfluencer: '#influencer' as String,
      toVision: '#vision' as String,
      toNews: '#news' as String,
      toCompany: '#company' as String,
      toContact: '#contact' as String
    }
  },
  methods: {
    toggleMenu () {
      if (!this.active) {
        this.active = true
        this.panelactive = true
        this.circleactive = true
      } else {
        this.active = false
        this.panelactive = false
        this.circleactive = false
      }
    }
  }
})
</script>

<style scoped lang="scss">
a {
  cursor: pointer;
}
/*========= ナビゲーションのためのCSS ===============*/

/*アクティブになったエリア*/
#g-nav.panelactive{
  /*position:fixed;にし、z-indexの数値を大きくして前面へ*/
  width:100%;
  position:fixed;
  z-index: 999;
  top: 0;
  right: 0;
  height: 100vh;
}

/*丸の拡大*/
.circle-bg{
  position: fixed;
  z-index:3;
  /*丸の形*/
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #ffffff;
  /*丸のスタート位置と形状*/
  transform: scale(0);/*scaleをはじめは0に*/
  right: 0px;
  top: 0px;
  transition: all .6s;/*0.6秒かけてアニメーション*/
}

.circle-bg.circleactive{
  transform: scale(50);/*クラスが付与されたらscaleを拡大*/
}

/*ナビゲーションの縦スクロール*/
#g-nav-list{
  display: none;/*はじめは表示なし*/
  /*ナビの数が増えた場合縦スクロール*/
  width: 100%;
  justify-content: space-between;
  -webkit-overflow-scrolling: touch;
  position: fixed;
  padding: 60px;
  box-sizing: border-box;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  z-index: 999;
  @include mq(xl) {
    flex-direction: column;
    padding: 30px;
  }
}

#g-nav.panelactive #g-nav-list{
  display: inline-flex; /*クラスが付与されたら出現*/
}

/*ナビゲーション*/
#g-nav {
  opacity: 0;/*はじめは透過0*/
  /*ナビゲーション天地中央揃え※レイアウトによって調整してください。不必要なら削除*/
  z-index: 999;
}

/*背景が出現後にナビゲーションを表示*/
#g-nav.panelactive {
  opacity:1;
}

/* 背景が出現後にナビゲーション li を表示※レイアウトによって調整してください。不必要なら削除*/
#g-nav.panelactive{
  animation-name:gnaviAnime;
  animation-duration:1s;
  animation-delay:.2s;/*0.2 秒遅らせて出現*/
  animation-fill-mode:forwards;
  opacity:0;
}
@keyframes gnaviAnime{
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/*リストのレイアウト設定*/
#g-nav li{
  list-style: none;
}

#g-nav li a{
  color: $black-100;
  text-decoration: none;
  font-weight: 700;
  line-height: 110px;
  font-size: 7rem;
  @include mq(xl) {
    font-size: 3rem;
    line-height: 80px;
  }
}

.times-wrapper {
  height: calc(110px * 7);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  span {
    font-size: 7rem;
    font-weight: 700;
      @include mq(xl) {
      font-size: 3rem;
      line-height: 80px;
    }
  }
}

.day-of-week {
  width: 414px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 7rem;
  font-weight: 700;
  color: $white;
  background-color: $black-100;
  padding: 0 20px;
  box-sizing: border-box;
  @include mq(xl) {
    width: 155px;
    height: 80px;
    font-size: 3rem;
    line-height: 80px;
  }
}

/*========= ボタンのためのCSS ===============*/
.openbtn{
  position:relative;
  width: 30px;
  height: 20px;
  z-index: 9999;/*ボタンを最前面に*/
  cursor: pointer;
  border-radius: 50%;
}

/*×に変化*/
.openbtn span{
  display: inline-block;
  transition: all .4s;
  position: absolute;
  left: 0px;
  height: 3px;
  border-radius: 1.5px;
  background-color: $black-100;
  width: 30px;
  }

.openbtn span:nth-of-type(1) {
  top:0px;
}

.openbtn span:nth-of-type(2) {
  top:10px;
}

.openbtn span:nth-of-type(3) {
  top:20px;
}

.openbtn.active span:nth-of-type(1) {
  top: 4px;
  transform: translateY(6px) rotate(-45deg);
  width: 70%;
}

.openbtn.active span:nth-of-type(2) {
  opacity: 0;
}

.openbtn.active span:nth-of-type(3){
  top: 16px;
  transform: translateY(-6px) rotate(45deg);
  width: 70%;
}</style>
