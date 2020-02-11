<template>
  <div class="actions p-8 hidden sm:flex flex-col sticky top-1/5">
    <a :href="twitterTo" target="_blank" rel="noopener noreferrer">
      <fa
        :icon="['fab', 'twitter']"
        class="rounded-full bg-twitter text-white fa-4x p-4 mb-4"
      />
    </a>
    <a :href="facebookTo" target="_blank" rel="noopener noreferrer">
      <fa :icon="['fab', 'facebook']" class="text-facebook fa-4x" />
    </a>
  </div>
</template>

<script>
export default {
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
