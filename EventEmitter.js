/**
 * const event = new EventEmitter()
 * 
 * const handleClick1 = (e) => console.log('click1', e)
 * const handleClick2 = (e) => console.log('click2', e)
 * 
 * event.on('click', handleClick1)
 * event.on('click', handleClick2)
 * 
 * event.trigger('click', { a: 1 }, {a: 2}) // 'click1', { a: 1}, {a: 2} 'click2', { a: 2}
 * 
 * event.off('click', handleClick1)
 * 
 * event.trigger('click', { a: 1 }) // 'click2', { a: 1}
 */


class EventEmitter {
  constructor() {
    this.subscribe = {}
  }
 on(eventName, cb) {
  if (!Array.isArray(this.subscribe[eventName])) {
    this.subscribe[eventName] = []
  }
  this.subscribe[eventName].push(cb)
 }
 trigger(eventName, ...args) {
  this.subscribe[eventName].forEach(item => {
    item(...args)
  });
 }
 off(eventName, cb) {
  this.subscribe[eventName] = this.subscribe[eventName].filter(item => item === cb)
 }
}

  const event1 = new EventEmitter()
  
  const handleClick1 = (e) => console.log('click1', e)
  const handleClick2 = (e) => console.log('click2', e)
  
  event1.on('click', handleClick1)
  event1.on('click', handleClick2)
  
  event1.trigger('click', { a: 1 }) // 'click1', { a: 1} 'click2', { a: 1}
  
  event1.off('click', handleClick1)
  
  event1.trigger('click', { a: 1 }) // 'click2', { a: 1}