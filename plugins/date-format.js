import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDate', function(value) {
  const date = moment(value)
  return date.format('YYYY.MM.DD(ddd)')
})

Vue.filter('formatRelativeTime', function(value) {
  const date = moment(value)
  return date.fromNow()
})
