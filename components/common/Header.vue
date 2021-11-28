<template>
  <div class="header">
    <nuxt-link v-scroll-to="'#main-visual'" to="/" class="logo">
      Hungry Dog
    </nuxt-link>
    <div class="header-r">
      <div class="clock">
        JPN {{ nowTime }}
      </div>
      <div class="header-hamburger">
        <Hamburger @changeZIndex="changeZIndex" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Hamburger from '@/components/common/Hamburger.vue'

export default Vue.extend({
  components: {
    Hamburger
  },
  data () {
    return {
      isOpen: false as Boolean,
      nowTime: '' as String,
      degNum: 0 as Number,
      opacityNum: 1 as Number,
      heightNum: 20 as Number
    }
  },
  mounted () {
    this.getTime()
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
      // ハンバーガーアニメーション処理
      if (this.isOpen) {
        this.degNum = 45
        this.opacityNum = 0
      } else {
        this.degNum = 0
        this.opacityNum = 1
      }
    },
    getTime () {
      setInterval(() => {
        this.nowTime = this.$dayjs().format('HH:mm:ss')
      }, 1000)
    },
    changeZIndex (n: number) {
      this.$emit('changeZIndex', n)
    }
  }
})
</script>
<style scoped lang="scss">
.header {
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  box-sizing: border-box;
  position: fixed;
  z-index: 100;
  @include mq(md) {
    padding: 0 1rem;
    height: 50px;
  }
}

a {
  cursor: pointer;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  @include mq(md) {
    font-size: 1.2rem;
  }
}

.header-r {
  display: inline-flex;
  align-items: center;
  span {
    font-weight: 700;
  }
}

.clock {
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 1.9rem;
  @include mq(xl) {
    margin-left: 0;
  }
  @include mq(md) {
    font-size: 1rem;
  }
}

.header-hamburger {
  margin-left: 2.2rem;
  z-index: 100;
  @include mq(xl) {
    margin-left: 1rem;
  }
}
</style>
