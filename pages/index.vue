<template>
  <div class="flex">
    <post-item
      v-for="item in items"
      :title="item.title"
      :abstract="item.abstract"
      :key="item.title"
      class="w-1/3 h-10 shadow"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'title1', abstract: 'testtesttest2' },
        { title: 'title2', abstract: 'testtesttest2' }
      ]
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
