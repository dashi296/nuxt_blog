<template>
  <div class="flex p-8">
    <template v-for="post in posts">
      <nuxt-link :to="`/posts/${post.fields.slug}`" :key="post.fields.slug">
        <post-item
          :title="post.fields.title"
          :content="post.fields.content"
          class="w-1/3 h-10 shadow"
        />
      </nuxt-link>
    </template>
  </div>
</template>

<script>
import client from '~/plugins/contentful'
export default {
  asyncData({ params }) {
    return client
      .getEntries({ content_type: 'post', order: '-sys.createdAt' })
      .then((entries) => {
        return { posts: entries.items }
      })
      .catch((e) => console.log(e))
  }
}
</script>
