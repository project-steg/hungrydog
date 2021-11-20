<template>
  <div class="influencer">
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
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
  display: flex;
  justify-content: center;
}
</style>
