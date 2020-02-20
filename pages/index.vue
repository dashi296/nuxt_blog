<template>
  <div class="flex justify-between flex-wrap py-12 w-full">
    <template v-for="(post, i) in posts">
      <divider v-if="i > 0" :key="`d${post.fields.slug}`" />
      <post-item :post="post" :key="post.fields.slug" />
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('FETCH_POSTS')
  }
}
</script>
