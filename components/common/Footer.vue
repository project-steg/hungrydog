<template>
  <div class="footer">
    &copy; 2022 Hungry Dog Inc.
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>
<style scoped lang="scss">
.footer {
  width: 100%;
  height: 200px;
  background-color: $black-100;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  color: $white;
  @include mq(md) {
    height: 100px;
    margin-top: 60px;
  }
}
</style>
