<template>
  <div class="top-contents">
    <div class="tile-title">
      お客様にあった<br>
      最適な施策選び
    </div>
    <div class="top-contents-grid">
      <div class="md-tile-title">
        お客様にあった<br>
        最適な施策選び
      </div>
      <div class="contents">
        <div class="num">
          01
        </div>
        <div class="icon">
          <SvgIcon type="Marketing" />
        </div>
        <div class="contents-title">
          インフルエンサー<br>マーケティング事業
        </div>
      </div>
      <div class="contents">
        <div class="num">
          02
        </div>
        <div class="icon">
          <SvgIcon type="Affiliate" />
        </div>
        <div class="contents-title">
          広告代理<br>アフィリエイト事業
        </div>
      </div>
      <div class="contents">
        <div class="num">
          03
        </div>
        <div class="icon">
          <SvgIcon type="Creative" />
        </div>
        <div class="contents-title">
          クリエイティブ事業
        </div>
      </div>
      <div class="contents">
        <div class="num">
          04
        </div>
        <div class="icon">
          <SvgIcon type="Livers" />
        </div>
        <div class="contents-title">
          ライバー代理店事業
        </div>
      </div>
      <div class="contents">
        <div class="num">
          05
        </div>
        <div class="icon">
          <SvgIcon type="Commerce" />
        </div>
        <div class="contents-title">
          ライブコーマース事業
        </div>
      </div>
      <div class="contents">
        <div class="num">
          06
        </div>
        <div class="icon">
          <SvgIcon type="Media" />
        </div>
        <div class="contents-title">
          メディア事業
        </div>
      </div>
      <div class="contents">
        <div class="num">
          07
        </div>
        <div class="icon">
          <SvgIcon type="Posting" />
        </div>
        <div class="contents-title">
          ポスティング事業
        </div>
      </div>
      <div class="contents">
        <div class="num">
          08
        </div>
        <div class="icon">
          <SvgIcon type="SNSManagement" />
        </div>
        <div class="contents-title">
          SNSアカウント運営事業
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
.top-contents {
  max-width: 1000px;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tile-title {
  width: 225px;
  height: 100%;
  background-color: $black-100;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $white;
  font-size: 1rem;
  font-weight: 700;
  margin-right: 20px;
  @include mq(lg) {
    display: none;
  }
}

.md-tile-title {
  display: none;
  width: 180px;
  height: 180px;
  flex-direction: column;
  align-items: center!important;;
  justify-content: center;
  background-color: $black-100;
  color: $white;
  font-size: 0.8rem;
  font-weight: 700;
  @include mq(lg) {
    display: flex;
  }
  @include mq(md) {
    width: 160px;
    height: 160px;
  }
}

.top-contents-grid {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 180px);
  gap: 20px;
  @include mq(lg) {
    justify-content: center;
  }
  @include mq(md) {
    grid-template-columns: repeat(auto-fit, 160px);
  }
}

.contents {
  width: 180px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 2px solid $black-100;
  @include mq(md) {
    width: 160px;
    height: 160px;
  }
}

.num {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 10px 10px 0 0 ;
}

.icon {
  margin-bottom: 0.8rem;
}

.contents-title {
  font-size: 0.8rem;
  font-weight: 700;
  text-align: center;
  padding: 0 0 15px 0;
}
</style>
