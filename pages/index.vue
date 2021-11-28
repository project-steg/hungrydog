<template>
  <div class="index">
    <Header @changeZIndex="changeZIndex" />
    <SnsIcons :zindex="zIndex" />
    <MainVisual />
    <Service />
    <Influencer />
    <Vision />
    <News />
    <Company />
    <Contact />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/common/Header.vue'
import SnsIcons from '@/components/common/SnsIcons.vue'
import MainVisual from '@/components/mainVisual/MainVisual.vue'
import Service from '@/components/service/Service.vue'
import Influencer from '@/components/influencer/Influencer.vue'
import Vision from '@/components/vision/Vision.vue'
import News from '@/components/news/News.vue'
import Company from '@/components/company/Company.vue'
import Contact from '@/components/contact/Contact.vue'
import Footer from '@/components/common/Footer.vue'

export default Vue.extend({
  components: {
    MainVisual,
    Header,
    Service,
    Influencer,
    Vision,
    News,
    Company,
    Contact,
    Footer,
    SnsIcons
  },
  data () {
    return {
      zIndex: 110 as number
    }
  },
  methods: {
    changeZIndex (n: number) {
      if (n === 110) {
        setTimeout(() => {
          this.zIndex = n
        }, 500)
      } else {
        this.zIndex = n
      }
    }
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
