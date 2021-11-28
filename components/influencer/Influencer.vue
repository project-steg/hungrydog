<template>
  <div v-if="influencerDataList[0]" id="influencer">
    <div class="num">
      03
    </div>
    <div class="title">
      <h1>INFLUENCER</h1>
      <div class="line" />
    </div>
    <div class="contents">
      <div v-for="elem in influencerDataList" :key="elem.id">
        <InfluencerItem :influencer="elem" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import InfluencerItem from '@/components/influencer/InfluencerItem.vue'

export default Vue.extend({
  components: {
    InfluencerItem
  },
  data () {
    return {
      influencerDataList: [] as object[]
    }
  },
  async created () {
    const res = await this.$axios.get(`${process.env.BASE_URL}influencer?limit=99`, {
      headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY }
    })
    this.influencerDataList = res.data.contents
  }
})
</script>
<style scoped lang="scss">
#influencer {
  max-width: 1020px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 80px 0;
  @include mq(md) {
    padding: 30px 0;
  }
}

.num {
  font-size: 8rem;
  font-weight: 700;
  color: $black-600;
  border-bottom: 4px solid $black-600;
  position: absolute;
  top: 80px;
  left: -200px;
  z-index: 1;
  @include mq(xxl) {
    font-size: 5rem;
    top: 70px;
    left: unset;
    right: 5vw;
  }
  @include mq(md) {
    top: 10px;
    right: 0px;
  }
}
.title {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 40px 0;
  z-index: 2;
  h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-right: 40px;
    @include mq(md) {
      font-size: 2.7rem;
      margin-right: 20px;
    }
  }
  .line {
    width: 10rem;
    height: 2px;
    border-radius: 1px;
    background-color: $black-100;
    @include mq(md) {
      width: 60px;
    }
  }
}

.contents {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 60px;
  justify-content: center;
}
</style>
