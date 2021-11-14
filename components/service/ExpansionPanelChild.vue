<template>
  <div class="expansion-panel-child">
    <div class="title" @click="toggleExpansion()">
      <slot name="title" />
      <div class="arrow" :style="{transform: `rotate(${rotateNum}deg)`}" />
    </div>
    <div class="underline" />
    <transition name="slide-in">
      <div v-if="isOpened" class="contents">
        <slot name="contents" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      isOpened: false as boolean,
      rotateNum: 45 as number
    }
  },
  methods: {
    toggleExpansion () {
      this.isOpened = !this.isOpened
      if (this.isOpened) {
        this.rotateNum = this.rotateNum + 180
      } else {
        this.rotateNum = this.rotateNum - 180
      }
    }
  }
})
</script>

<style scoped lang="scss">
.expansion-panel-child {
  width: calc(100% + 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px 0 90px;
  position: relative;
  left: -30px;
  cursor: pointer;
  &:hover {
    background-color: rgba($black-700, 90%);
  }
}

.title {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 auto;
}

.arrow {
  width: 14px;
  height: 14px;
  border-right: 3px solid $black-100;
  border-bottom: 3px solid $black-100;
  transition-duration: .2s;
}

.underline {
  background:linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,1) 55%, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0) 100%) 0% 0%;
  background-size:9px 1px;
  width: 100%;
  height: 1px;
}

.slide-in-enter-active, .slide-in-leave-active {
  transition: opacity .2s;
}
.slide-in-enter, .slide-in-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.contents {
  width: 100%;
  min-height: 80px;
  padding: 0 30px;
}
</style>
