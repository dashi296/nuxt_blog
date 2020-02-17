<template>
  <header class="shadow">
    <div class="w-full max-w-screen-lg mx-auto flex justify-between">
      <nuxt-link to="/">
        <div class="text-xl text-primary tracking-widest py-4 px-8">
          Web Engine
        </div>
      </nuxt-link>

      <div class="flex justify-center">
        <nav-link
          v-for="item in navlinkItems"
          :label="item.label"
          :to="item.to"
          :key="item.label"
        />
      </div>
    </div>
  </header>
</template>

<script>
import NavLink from '@/components/common/NavLink'
export default {
  components: {
    NavLink
  },
  data() {
    return {
      navlinkItems: [
        { label: 'About', to: '/about' },
        { label: 'Contact', to: '/contact' }
      ]
    }
  }
}
</script>
