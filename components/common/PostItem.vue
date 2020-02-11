<template>
  <div
    class="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 m-2 rounded shadow"
  >
    <img src="/dummy.png" alt="dummy" />
    <div class="text-xl">{{ title }}</div>
    <div>{{ content }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
}
</script>
