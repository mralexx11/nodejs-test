const EventEmitter = require('events')

const emiter = new EventEmitter()

emiter.on('anything', data => {
    console.log('ON: anything ', data)
})

emiter.emit('anything', {a: 1})
emiter.emit('anything', {b: 2})
emiter.emit('anything', {c: 3})
setTimeout(() => {
    emiter.emit('anything', {d: 4})
}, 1000)

class Dispatcher ex
