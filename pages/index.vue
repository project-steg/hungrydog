<template>
  <div class="index">
    <Header />
    <MainVisual />
    <Service />
    <Influencer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/common/Header.vue'
import MainVisual from '@/components/mainVisual/MainVisual.vue'
import Service from '@/components/service/Service.vue'
import Influencer from '@/components/influencer/Influencer.vue'

export default Vue.extend({
  components: {
    MainVisual,
    Header,
    Service,
    Influencer
  }
})
</script>
<style scoped lang="scss">
.index {
  width: 100%;
}
</style>
