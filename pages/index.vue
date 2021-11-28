<template>
  <div class="index">
    <Header />
    <MainVisual />
    <Service />
    <Influencer />
    <Vision />
    <News />
    <Company />
    <Contact />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/common/Header.vue'
import MainVisual from '@/components/mainVisual/MainVisual.vue'
import Service from '@/components/service/Service.vue'
import Influencer from '@/components/influencer/Influencer.vue'
import Vision from '@/components/vision/Vision.vue'
import News from '@/components/news/News.vue'
import Company from '@/components/company/Company.vue'
import Contact from '@/components/contact/Contact.vue'

export default Vue.extend({
  components: {
    MainVisual,
    Header,
    Service,
    Influencer,
    Vision,
    News,
    Company,
    Contact
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
