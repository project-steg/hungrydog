<template>
  <div class="detail-contents">
    <expansion-panel>
      <template #title>
        <div class="expansion-contents">
          <div class="num">
            01
          </div>
          <div class="text">
            インフルエンサーマーケティング事業
          </div>
        </div>
      </template>
      <template #contents>
        弊社では独自のネットワークからInstagrammer, YouTuber, TikTokerといった幅広いインフルエンサーを抱えております。
        商品や店舗と相性の良いインフルエンサーを最大限マッチングさせるお手伝いを致します。
      </template>
    </expansion-panel>
    <expansion-panel-child>
      <template #title>
        -&nbsp;&nbsp;キャスティング
      </template>
      <template #contents>
        商品や店舗等と相性の良いインフルエンサーと一丸となり、PRを行うサービスです。
        昨今、インフルエンサーのPRが実は必ずしもターゲットへリーチしていないといった経験や悩みがあるのではないでしょうか？<br>
        <div class="img-wrapper">
          <img src="@/assets/img/instagram-demo.jpg" alt="demo画像">
          <img src="@/assets/img/graph.jpg" alt="グラフ">
        </div>
        弊社では、ただフォロワーの数で判断する方法ではなく、過去実績やデータに基づき
        お客様に対して、正しいインフルエンサーをアサインさせて頂きます。
      </template>
    </expansion-panel-child>
    <expansion-panel-child>
      <template #title>
        -&nbsp;&nbsp;サーベイ / アンケート
      </template>
      <template #contents>
        商品や店舗等と相性の良いインフルエンサーが抱えているフォロワーに対してサーベイ / アンケートを行うサービスです。
        昨今、情報が錯綜していてユーザーが商品に対して「どう思っているのか？」「どう思われそうか？」を
        把握し効果測定を行う事がマーケティング戦略として重要となってきております。
        弊社では最大限、正しいデータ収集が出来るようお手伝いをさせて頂きます。
      </template>
    </expansion-panel-child>
    <expansion-panel>
      <template #title>
        <div class="expansion-contents">
          <div class="num">
            02
          </div>
          <div class="text">
            広告代理 / アフィリエイト業
          </div>
        </div>
      </template>
      <template #contents>
        弊社では、お客様のWEB広告運用周りのサポートをしております。
        各種媒体運用はもちろん、成果報酬で認知拡大・新規獲得を目指します。
        過去データや類似商材のデータはもちろん、
        弊社の強みであるインフルエンサー事業やクリエイティブ事業をリンクさせて弊社独自の運用提案をさせて頂きます。
      </template>
    </expansion-panel>
    <expansion-panel>
      <template #title>
        <div class="expansion-contents">
          <div class="num">
            03
          </div>
          <div class="text">
            クリエイティブ事業
          </div>
        </div>
      </template>
      <template #contents>
        動画から写真撮影、LP作成などを弊社独自のネットワークで抱えているクリエイターが
        インフルエンサーと連携して一気通貫行います。
        制作から、その後の運用までを視野に入れたご提案もできます。
        届けたいメッセージをユーザーへ伝えるためには、より親近感があるクリエイティブの制作が重要です。
        弊社は、お客様の商品の魅力を最大限に引き出せるクリエイティブ作成のお手伝いをします。
      </template>
    </expansion-panel>
    <expansion-panel>
      <template #title>
        <div class="expansion-contents">
          <div class="num">
            04
          </div>
          <div class="text">
            ライバー代理店事業
          </div>
        </div>
      </template>
      <template #contents>
        弊社は将来的にライブコマース事業を促進するという強い目標を持っており、
        17LIVE公式ゴールドパートナーやBIGOLIVE公式ライバー事務所と業務提携をしております。
        弊社は、未来のスター発掘にも力を入れております。
      </template>
    </expansion-panel>
    <expansion-panel>
      <template #title>
        <div class="expansion-contents">
          <div class="num">
            05
          </div>
          <div class="text">
            ライブコマース事業
          </div>
        </div>
      </template>
      <template #contents>
        Coming Soon...
      </template>
    </expansion-panel>
    <expansion-panel>
      <template #title>
        <div class="expansion-contents">
          <div class="num">
            06
          </div>
          <div class="text">
            メディア事業
          </div>
        </div>
      </template>
      <template #contents>
        Coming Soon...
      </template>
    </expansion-panel>
    <expansion-panel>
      <template #title>
        <div class="expansion-contents">
          <div class="num">
            07
          </div>
          <div class="text">
            ポスティング事業
          </div>
        </div>
      </template>
      <template #contents>
        Coming Soon...
      </template>
    </expansion-panel>
    <expansion-panel>
      <template #title>
        <div class="expansion-contents">
          <div class="num">
            08
          </div>
          <div class="text">
            SNSアカウント運営
          </div>
        </div>
      </template>
      <template #contents>
        ブランディングや認知度を高める上で重要なインスタグラムの運用代行を行います。弊社独自のインフルエンサーネットワークを活用しての運用施策や、業界最安値での物撮りなども魅力です。
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

.expansion-contents {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.num {
  font-size: 1.2rem;
  margin-right: 1rem;
}

.text {
  font-size: 1.2rem;
}

.img-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 1rem 0;
  @include mq(md) {
    flex-direction: column;
    img + img {
      margin-top: 1rem;
    }
  }
  img {
    width: 40%;
    height: auto;
    @include mq(md) {
      max-width: 400px;
      width: 100%;
    }
  }
}
</style>
