<template>
  <div class="influencer">
    <div class="num">
      03
    </div>
    <div class="title">
      <h1>INFLUENCER</h1>
      <div class="line" />
    </div>
    <div class="contents">
      <InfluencerItem />
      <InfluencerItem />
      <InfluencerItem />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import InfluencerItem from '@/components/influencer/InfluencerItem.vue'

export default Vue.extend({
  components: {
    InfluencerItem
  }
})
</script>
<style scoped lang="scss">
.influencer {
  max-width: 1020px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 80px 0;
}

.num {
  font-size: 8rem;
  font-weight: 700;
  color: $black-600;
  border-bottom: 4px solid $black-600;
  position: absolute;
  top: 80px;
  left: -200px;
}
.title {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 40px 0;
  h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-right: 40px;
  }
  .line {
    width: 10rem;
    height: 2px;
    border-radius: 1px;
    background-color: $black-100;
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
