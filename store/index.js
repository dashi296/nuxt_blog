import client from '~/plugins/contentful'

export const state = () => ({
  posts: []
})

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  }
}

export const actions = {
  async FETCH_POSTS({ commit }) {
    await client
      .getEntries({
        content_type: 'post',
        select: 'fields.title,fields.content,fields.slug,sys.createdAt',
        order: '-sys.createdAt'
      })
      .then((entries) => {
        console.log(entries.items)
        commit('setPosts', entries.items)
      })
      .catch((e) => console.log(e))
  }
}
