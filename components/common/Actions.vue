<template>
  <div class="actions p-8 hidden sm:flex flex-col sticky top-1/5">
    <sns-share-icon :to="twitterTo" icon="twitter" class="mb-4" />
    <sns-share-icon :to="facebookTo" icon="facebook" reversed />
  </div>
</template>

<script>
import SnsShareIcon from '@/components/common/SnsShareIcon'
export default {
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
    absolutePath() {
      return `${process.env.baseUrl}${this.$router.history.base}${this.$route.path}`
    },
    twitterTo() {
      return `https://twitter.com/intent/tweet?text=${this.shareText}&url=${this.absolutePath}`
    },
    facebookTo() {
      return `https://www.facebook.com/sharer/sharer.php?u=${this.absolutePath}`
    }
  }
}
</script>

<style scoped>
.actions {
  height: 200px;
}
</style>
