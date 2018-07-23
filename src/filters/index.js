import Vue from 'vue'
import format from 'date-fns/format'

Vue.filter('data-format', function (value, formatStr='HH:mm') {
  return format(value, formatStr)
})

