const events = (function () {
  const eventStack = new Map()

  return {
    on(type, fn) {
      const fnStack = eventStack.get(type) || new Set()
      fnStack.add(fn)
      eventStack.set(type, fnStack)
    },
    off(type, fn) {
      const fnStack = eventStack.get(type)
      if (fnStack && fnStack.has(fn)) {
        fnStack.delete(fn)
      }
    },
    emit(type) {
      const fnStack = eventStack.get(type)
      if (fnStack) {
        for (const fn of fnStack) {
          fn()
        }
      }
    }
  }
})()

class MyLibrary {
  constructor() {
    events.emit('beforeInit')

    console.log('library process')

    events.emit('afterInit')
  }
}

function customFn1() {
  console.log('customFn1')
}
function customFn2() {
  console.log('customFn2')
}
function customFn3() {
  console.log('customFn3')
}

events.on('beforeInit', customFn1)
events.on('beforeInit', customFn2)
events.on('afterInit', customFn3)
//events.off('beforeInit', customFn2)
new MyLibrary()

