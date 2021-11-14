<template>
  <div class="detail-contents">
    <expansion-panel>
      <template #title>
        01 インフルエンサーマーケティング事業
      </template>
    </expansion-panel>
    <expansion-panel>
      <template #title>
        01 インフルエンサーマーケティング事業
      </template>
      <template #contents>
        <expansion-panel-child>
          <template #title>
            01 インフルエンサーマーケティング事業
          </template>
          <template #contents>
            ああああああああああああああああああああああ
          </template>
        </expansion-panel-child>
      </template>
    </expansion-panel>
    <expansion-panel>
      <template #title>
        01 インフルエンサーマーケティング事業
      </template>
    </expansion-panel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ExpansionPanel from '@/components/service/ExpansionPanel.vue'
import ExpansionPanelChild from '@/components/service/ExpansionPanelChild.vue'

export default Vue.extend({
  components: {
    ExpansionPanel,
    ExpansionPanelChild
  }
})
</script>

<style scoped lang="scss">
.detail-contents {
  max-width: 1200px;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0px 30px 0px;
  border: 2px solid $black-100;
  background-color: $white;
  transition-duration: .2s;
  transition: .5s;
}
</style>
