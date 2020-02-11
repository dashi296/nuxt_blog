<template>
  <div class="mx-auto flex">
    <actions :share-text="title" />
    <div class="article max-w-screen-lg">
      <h1>{{ post.fields.title }}</h1>
      <time class="text-gray">{{ post.sys.createdAt | formatDate }}</time>
      <div v-html="$md.render(post.fields.content)" />
    </div>
  </div>
</template>

<script>
import client from '~/plugins/contentful'
export default {
  layout: 'post',
  computed: {
    title() {
      return this.post.fields.title
    }
  },
  asyncData({ params, error, payload }) {
    if (payload) return { post: payload }
    return client
      .getEntries({
        content_type: 'post',
        'fields.slug': params.slug
      })
      .then((entries) => {
        return { post: entries.items[0] }
      })
      .catch((e) => console.log(e))
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
