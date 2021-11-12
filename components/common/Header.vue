<template>
  <div class="header">
    <div class="logo">
      Hungry Dog
    </div>
    <div class="header-r">
      <span>follow us</span>
      <div class="sns-icons">
        <SvgIcon type="Instagram" />
      </div>
      <div class="sns-icons">
        <SvgIcon type="Twitter" />
      </div>
      <div class="clock">
        JPN {{ nowTime }}
      </div>
      <div class="header-hamburger">
        <Hamburger />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SvgIcon from '@/components/common/SvgIcon.vue'
import Hamburger from '@/components/common/Hamburger.vue'

export default Vue.extend({
  components: {
    SvgIcon,
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
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
}

.header-r {
  display: inline-flex;
  align-items: center;
  span {
    font-weight: 700;
  }
}

.sns-icons {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: $black-100;
  margin-left: 1rem;
  .svg-icon {
    fill: $white;
  }
}

.clock {
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 1.9rem;
}

.header-hamburger {
  margin-left: 2.2rem;
}
</style>
