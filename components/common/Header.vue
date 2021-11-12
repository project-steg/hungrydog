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
      <div class="hamburger" @click="toggle()">
        <div class="meat top" />
        <div class="meat bottom" />
        <div class="meat" />
      </div>
    </div>
    <transition name="fade">
      <div v-if="isOpen" class="container">
        hogehoge
      </div>
    </transition>

    <transition name="scale">
      <div v-if="isOpen" class="circle-back" />
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SvgIcon from '@/components/common/SvgIcon.vue'

export default Vue.extend({
  components: {
    SvgIcon
  },
  data () {
    return {
      isOpen: false as Boolean
    }
  },
  computed: {
    nowTime () {
      return this.$dayjs().format('YYYY:MM:DD')
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
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

.hamburger {
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: 2.2rem;
  cursor: pointer;
  z-index: 100;
}

.meat {
  width: 100%;
  height: 3px;
  border-radius: 1.5px;
  background-color: $black-100;
}

.top {
}

.circle-back {
  width: 300vh;
  height: 300vh;
  top: calc(-150vh + 35px);
  right: calc(-150vh + 2.5rem);
  border-radius: 50%;
  position: absolute;
  background-color: $white;
  z-index: 10;
}

.scale-enter-active {
  animation: change-scale .5s;
}

.scale-leave-active {
  animation: change-scale .5s reverse;
}

@keyframes change-scale {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
  font-size: 2rem;
  font-weight: 700;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
