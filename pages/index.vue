<template>
  <div class="flex justify-between flex-wrap py-12 w-full">
    <template v-for="(post, i) in posts">
      <divider v-if="i > 0" :key="`d${post.fields.slug}`" />
      <post-item :key="post.fields.slug" :post="post" />
    </template>
  </div>
</template>

<script>
export default {
  async fetch({ store }) {
    await store.dispatch('FETCH_POSTS')
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  }
}
</script>
