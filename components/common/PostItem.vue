<template>
  <div class="post rounded shadow">
    <img src="/dummy.png" alt="dummy" />
    <div class="text-2xl font-bold p-2">{{ title }}</div>
    <div>{{ content | Abstracted }}</div>
    <time class="text-gray text-right">
      {{ createdAt | formatRelativeTime }}
    </time>
  </div>
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

<style scoped>
.post {
  max-width: 300px;
}
</style>
