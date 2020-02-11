<template>
  <article>
    <h1>{{ post.fields.title }}</h1>
    <div>{{ post.sys.createdAt | formatDate }}</div>
    <div v-html="$md.render(post.fields.content)"></div>
  </article>
</template>

<script>
import client from '~/plugins/contentful'
export default {
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
      title: this.post.fields.title
    }
  }
}
</script>
