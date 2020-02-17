<template>
  <div class="side-menu hidden sm:flex flex-col w-1/4 shadow p-6 text-center">
    <img src="~assets/images/unio_s.png" class="h-auto rounded-full" />

    <div>dashi296</div>
    <div>Webエンジニア</div>
    <div></div>

    <div class="flex justify-around">
      <a href="https://twitter.com/dashi296">
        <fa
          :icon="['fab', 'twitter']"
          class="rounded-full text-gray hover:text-twitter fa-4x p-2 mb-4"
        />
      </a>
      <a href="https://github.com/dashi296">
        <fa
          :icon="['fab', 'github']"
          class="rounded-full text-gray hover:text-github p-2 fa-4x mb-4"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileItems: [
        { label: 'Name', value: 'dashi' },
        { label: 'Job', value: 'Web Engineer' }
      ]
    }
  }
}
</script>
