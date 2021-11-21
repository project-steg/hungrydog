<template>
  <div class="index">
    <Header />
    <MainVisual />
    <Service />
    <Influencer />
    <Vision />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/common/Header.vue'
import MainVisual from '@/components/mainVisual/MainVisual.vue'
import Service from '@/components/service/Service.vue'
import Influencer from '@/components/influencer/Influencer.vue'
import Vision from '@/components/vision/Vision.vue'

export default Vue.extend({
  components: {
    MainVisual,
    Header,
    Service,
    Influencer,
    Vision
  }
})
</script>
<style scoped lang="scss">
.index {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
