<template>
  <a :href="to" target="_blank" rel="noopener noreferrer">
    <fa
      :icon="['fab', icon]"
      :class="iconClass"
      class="rounded-full text-4xl"
    />
  </a>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    reversed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconClass() {
      if (this.reversed) return `text-${this.icon} bg-white`
      return `text-white bg-${this.icon} p-2`
    }
  }
}
</script>
