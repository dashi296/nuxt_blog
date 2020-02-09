<template>
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 m-2 shadow">
    <img src="/dummy.png" alt="dummy" />
    <div class="text-xl">{{ title }}</div>
    <div>{{ abstract }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    abstract: {
      type: String,
      required: true
    }
  }
}
</script>
