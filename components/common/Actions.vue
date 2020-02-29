<template>
  <div class="actions p-8 hidden sm:flex flex-col sticky top-1/5">
    <sns-share-icon :to="twitterTo" icon="twitter" class="mb-4" />
    <sns-share-icon :to="facebookTo" icon="facebook" reversed />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SnsShareIcon from '@/components/common/SnsShareIcon.vue'

export default Vue.extend({
  components: {
    SnsShareIcon
  },
  props: {
    shareText: {
      type: String,
      required: true
    }
  },
  computed: {
    absolutePath(): string {
      // history要らないのでは？ return `${process.env.baseUrl}${this.$router.history.base}${this.$route.path}`
      return `${process.env.baseUrl}${this.$route.path}`
    },
    twitterTo(): string {
      return `https://twitter.com/intent/tweet?text=${this.shareText}&url=${this.absolutePath}`
    },
    facebookTo(): string {
      return `https://www.facebook.com/sharer/sharer.php?u=${this.absolutePath}`
    }
  }
})
</script>

<style scoped>
.actions {
  height: 200px;
}
</style>
