const hello = require('@playground/hello')
const pick = require('lodash.pick')

hello()

console.log(pick({ a: 1, b: 2}, 'a'))
