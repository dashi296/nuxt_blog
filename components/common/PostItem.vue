<template>
  <nuxt-link
    :to="`/posts/${post.fields.slug}`"
    class="inline-block p-4 w-full hover:text-primary"
  >
    <div class="post rounded">
      <div class="text-xl font-bold tracking-wider pb-1">{{ title }}</div>
      <div class="text-sm tracking-wide leading-5 text-black">
        {{ content | Abstracted }}
      </div>
      <fa :icon="['fas', 'clock']" class="text-gray text-xs" />
      <time class="text-gray text-right text-xs">
        {{ createdAt | formatRelativeTime }}
      </time>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    title() {
      return this.post.fields.title
    },
    content() {
      return this.post.fields.content
    },
    createdAt() {
      return this.post.sys.createdAt
    }
  }
}
</script>
