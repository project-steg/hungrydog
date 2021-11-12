<template>
  <div class="index">
    <Header />
    <MainVisual />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/common/Header.vue'
import MainVisual from '@/components/mainVisual/MainVisual.vue'

export default Vue.extend({
  components: {
    MainVisual,
    Header
  }
})
</script>
<style scoped lang="scss">
.index {
  width: 100%;
  background-color: #f7f7f7;
}
</style>
