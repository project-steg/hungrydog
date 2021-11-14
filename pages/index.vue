<template>
  <div class="index">
    <Header />
    <MainVisual />
    <Service />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/common/Header.vue'
import MainVisual from '@/components/mainVisual/MainVisual.vue'
import Service from '@/components/service/Service.vue'

export default Vue.extend({
  components: {
    MainVisual,
    Header,
    Service
  }
})
</script>
<style scoped lang="scss">
.index {
  width: 100%;
}
</style>
