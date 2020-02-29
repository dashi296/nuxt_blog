<template>
  <div class="flex justify-between flex-wrap py-12 w-full">
    <template v-for="(post, i) in posts">
      <divider v-if="i > 0" :key="`d${post.fields.slug}`" />
      <post-item :key="post.fields.slug" :post="post" />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Post } from '@/models/Post'

export default Vue.extend({
  async fetch({ store }) {
    await store.dispatch('FETCH_POSTS')
  },
  computed: {
    posts(): Post[] {
      return this.$store.state.posts
    }
  }
})
</script>
