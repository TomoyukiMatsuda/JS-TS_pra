window.name = 'ジョン'

const person = {
  name: 'トム',
  hello: function() {
    console.log('ハロー, ' + this.name)
  }
}
person.hello()

// bind(thisの対象) することでperson.helloの中のthisの参照先を指定している
const helloTom = person.hello.bind(person) // this = person
const helloJohn = person.hello.bind(window) // this = window

function fn(ref) {
  ref()
}

fn(helloTom)
fn(helloJohn)

// bind(thisの参照先, 引数の参照先)
function fn2(name) {
  console.log(name)
}

const fnName = fn2.bind(null, 'ティム')
fnName()
