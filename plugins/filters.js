import Vue from 'vue'

const ABSTRACT_LENGTH = 140

// 記事一覧の記事の最初の部分を取得
Vue.filter('Abstracted', function(value) {
  if (value.length <= ABSTRACT_LENGTH) return value
  return `${value.substr(0, ABSTRACT_LENGTH)} ...`
})
