<template>
  <nuxt-link :to="to">
    <div class="flex justify-center items-center h-full">
      <div
        class="text-sm text-gray hover:text-primary tracking-wider py-4 px-8 "
      >
        {{ label }}
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    }
  }
}
</script>
