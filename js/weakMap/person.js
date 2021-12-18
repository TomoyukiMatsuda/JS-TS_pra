// WeakMapとプライベート変数
const wm = new WeakMap();
export class Person {
  constructor(name) {
    // プライベート変数
    //this._name = name;
    wm.set(this, {name})
  }

  hello() {
    console.log(`hello ${wm.get(this)}`);
  }
}
