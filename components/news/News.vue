<template>
  <div id="news">
    <div class="title-wrapper">
      <div class="title">
        <h2>NEWS</h2>
        <div class="line" />
      </div>
      <div class="section-num">
        04
      </div>
    </div>
    <div class="container">
      <div v-for="elem in newsDataList" :key="elem.id" class="news-item">
        <div class="date">
          {{ elem.date }}
        </div>
        <div class="news-text">
          {{ elem.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      newsDataList: [] as object[]
    }
  },
  async created () {
    const res = await this.$axios.get(`${process.env.BASE_URL}news?limit=99`, {
      headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY }
    })
    this.newsDataList = res.data.contents
  }
})
</script>
<style scoped lang="scss">
#news {
  max-width: 1200px;
  width: 90%;
  display: flex;
  margin-bottom: 80px;
  @include mq(lg) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px
  }
}

.title-wrapper {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  @include mq(lg) {
    width: 100%;
    flex-direction: unset;
  }
}

.title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @include mq(lg) {
    width: 100%;
  }
}

h2 {
  font-size: 8rem;
  font-weight: 700;
  @include mq(lg) {
    font-size: 5rem;
  }
}

.line {
  width: 180px;
  height: 8px;
  background-color: $black-100;
}

.section-num {
  font-size: 8rem;
  color: $black-700;
  font-weight: 700;
  margin-top: 70px;
  border-bottom: 4px solid $black-700;
  @include mq(lg) {
    margin: 0 1.5rem 0 0;
    font-size: 6rem;
    position: relative;
    bottom: -40px;
  }
}

.container {
  max-width: 800px;
  width: 100%;
  height: 300px;
  overflow-y: scroll;
  margin: 70px 0 0 100px;
  padding-right: 1rem;
  @include mq(lg) {
    margin: 4rem 0;
  }
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: $black-700;
}

::-webkit-scrollbar-thumb {
  background-color: $black-100;
  border-radius: 10px;
}

.news-item {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  background-image : linear-gradient(to right, #000, #000 2px, transparent 2px, transparent 8px);  /* 幅2の線を作る */
  background-size: 8px 1px;          /* グラデーションの幅・高さを指定 */
  background-position: left bottom;  /* 背景の開始位置を指定 */
  background-repeat: repeat-x;       /* 横向きにのみ繰り返す */
}

.date {
  margin: 0 20px;
}
</style>
