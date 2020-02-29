import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Post } from '@/models/Post'
import client from '~/plugins/contentful'

interface RootState {
  post: Post[]
  posts: Post[]
}

export const state = () => ({
  post: {},
  posts: [] as Post[]
})

export const getters: GetterTree<RootState, RootState> = {
  post: (state) => state.post,
  posts: (state) => state.posts
}

export const mutations: MutationTree<RootState> = {
  setPosts(state, posts) {
    state.posts = posts
  },
  setPost(state, post) {
    state.post = post
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async FETCH_POSTS({ commit }) {
    await client
      .getEntries({
        content_type: 'post',
        select: 'fields.title,fields.content,fields.slug,sys.createdAt',
        order: '-sys.createdAt'
      })
      .then((entries) => {
        commit('setPosts', entries.items)
      })
      .catch((e) => console.log(e))
  },

  async FETCH_POST({ commit }, { slug }) {
    await client
      .getEntries({
        content_type: 'post',
        'fields.slug': slug
      })
      .then((entries) => {
        commit('setPost', entries.items[0])
      })
      .catch((e) => console.log(e))
  }
}
