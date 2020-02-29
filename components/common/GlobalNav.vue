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
          :key="item.label"
          :label="item.label"
          :to="item.to"
        />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import NavLink from '@/components/common/NavLink.vue'

interface NavLinkItem {
  label: string
  to: string
}

type dataType = {
  navlinkItems: NavLinkItem[]
}

export default Vue.extend({
  components: {
    NavLink
  },
  data(): dataType {
    return {
      navlinkItems: [
        { label: 'About', to: '/about' },
        { label: 'Contact', to: '/contact' }
      ]
    }
  }
})
</script>
