<template>
  <div id="contact">
    <div class="title">
      <h2>CONTACT</h2>
    </div>
    <div class="input-wrapper">
      <div class="label">
        氏名
      </div>
      <input v-model="name" type="text">
    </div>
    <div class="input-wrapper">
      <div class="label">
        メールアドレス
      </div>
      <input v-model="mail" type="text">
    </div>
    <div class="textarea-wrapper">
      <div class="label">
        お問い合わせ内容
      </div>
      <textarea v-model="content" />
    </div>
    <button @click="submit()">
      送信
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      name: '' as string,
      mail: '' as string,
      content: '' as string,
      isError: false as boolean
    }
  },
  methods: {
    async submit () {
      if (this.name && this.mail && this.content) {
        await this.$axios.$post(`${process.env.BASE_URL}contact`, {
          name: this.name,
          mail: this.mail,
          content: this.content
        }, {
          headers: {
            'Content-Type': 'application/json',
            'X-MICROCMS-API-KEY': process.env.API_KEY
          }
        }).then(() => {
          alert('送信しました')
          this.name = ''
          this.mail = ''
          this.content = ''
        }).catch(() => {
          alert('エラーが発生しました')
        })
      } else {
        alert('値を入力してください')
      }
    }
  }
})
</script>
<style scoped lang="scss">
#contact {
  max-width: 1200px;
  width: 90%;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include mq(md) {
    margin-top: 60px;
  }
}

.title {
  width: 100%;
  margin-bottom: 30px;
  @include mq(md) {
    margin-bottom: 5px;
  }
}

h2 {
  display: inline-block;
  font-size: 3rem;
  font-weight: 700;
  border-bottom: 6px solid $black-100;
}

.input-wrapper {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  @include mq(md) {
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }
}

.textarea-wrapper {
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  @include mq(md) {
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
  }
}

.label {
  width: 20%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1.1rem 2rem 0 0;
  font-weight: 700;
  @include mq(md) {
    width: 100%;
    justify-content: flex-start;
  }
}

input {
  width: 80%;
  height: 100%;
  background-color: $black-700;
  padding: 1rem;
  @include mq(md) {
    width: 100%;
    margin-top: 9px;
  }
}

textarea {
  width: 80%;
  height: 100%;
  background-color: $black-700;
  padding: 1rem;
  @include mq(md) {
    width: 100%;
    margin-top: 9px;
  }
}

button {
  max-width: 180px;
  width: 90%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $black-100;
  color: #ffffff;
  margin-top: 60px;
  cursor: pointer;
  @include mq(md) {
    height: 50px;
    margin-top: 30px;
  }
}
</style>
