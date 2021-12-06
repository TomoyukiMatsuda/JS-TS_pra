// descriptor
// オブジェクトのプロパティのさまざまな設定を表すもの？
// value, configurable, enumerable, writable というプロパティからなる
// value: 値
// configurable: 設定変更可能性
// enumerable: 列挙可能性
// writable: 値の変更可能性

// あまり利用する機会はないかもしれないものの、それぞれのプロパティには
// descriptorというものが存在し、設定がなされている
const obj = {}
Object.defineProperty(obj, 'prop', {
  value: 0,
  writable: true, // propを変更できるようになる
  configurable: true,
  enumerable: true,
})
obj.prop = 11
console.log(obj)
const descriptor = Object.getOwnPropertyDescriptor(obj, 'prop')
console.log(descriptor)