const hello = require('@playground/hello')
const pick = require('lodash.pick')

hello()

console.log('Pick output', pick({ a: 1, b: 2}, 'a'))
