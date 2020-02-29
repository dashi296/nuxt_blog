<template>
  <nuxt-link
    :to="`/posts/${post.fields.slug}`"
    class="inline-block p-4 w-full hover:text-primary"
  >
    <div class="post rounded">
      <div class="text-xl font-bold tracking-wider pb-1">
        {{ title }}
      </div>
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

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Post } from '@/models/Post'

export default Vue.extend({
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true
    }
  },
  computed: {
    title(): string {
      return this.post.fields.title
    },
    content(): string {
      return this.post.fields.content
    },
    createdAt(): string {
      return this.post.sys.createdAt
    }
  }
})
</script>
