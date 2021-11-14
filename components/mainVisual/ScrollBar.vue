<template>
  <div class="scroll-bar">
    <span>Scroll</span>
    <div class="bar-area">
      <div class="bar" />
      <div class="bar2" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
<style scoped lang="scss">
.scroll-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
}

span {
  font-size: 1rem;
  font-weight: 700;
  transform: rotate(90deg);
}

.bar-area {
  height: 180px;
  margin-top: 30px;
  overflow: hidden;
  position: relative;
  @include mq(md) {
    height: 160px;
  }
}

.bar {
  width: 1px;
  height: 80%;
  top: -100%;
  border-radius: 0.5px;
  background-color: $black-100;
  animation: 4s slide-bar infinite linear;
  position: absolute;
}

.bar2 {
  width: 1px;
  height: 80%;
  border-radius: 0.5px;
  background-color: $black-100;
  animation: 4s slide-bar infinite linear;
}

@keyframes slide-bar {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(125%);
  }
}
</style>
