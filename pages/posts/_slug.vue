<template>
  <div class="mx-auto flex justify-center">
    <actions :share-text="title" />
    <div class="article max-w-screen-md py-12">
      <h1>{{ title }}</h1>
      <time class="text-gray">{{ createdAt | formatDate }}</time>
      <div v-html="$md.render(content)" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { Post } from '@/models/Post'
type asyncDataType = {
  post: Post
}

export default Vue.extend({
  computed: {
    ...mapGetters(['post']),
    title(): string {
      return this.post.fields.title
    },
    content(): string {
      return this.post.fields.content
    },
    createdAt(): string {
      return this.post.sys.createdAt
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('FETCH_POST', { slug: params.slug })
  },
  head(): { title: string } {
    return {
      title: this.title
    }
  }
})
</script>
