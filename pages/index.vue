<template>
  <div class="flex justify-between flex-wrap py-12 w-full">
    <template v-for="(post, i) in posts">
      <divider v-if="i > 0" :key="`d${post.fields.slug}`" />
      <post-item :post="post" :key="post.fields.slug" />
    </template>
  </div>
</template>

<script>
import client from '~/plugins/contentful'
export default {
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: 'post',
        select: 'fields.title,fields.content,fields.slug,sys.createdAt',
        order: '-sys.createdAt'
      })
      .then((entries) => {
        return { posts: entries.items }
      })
      .catch((e) => console.log(e))
  }
}
</script>
