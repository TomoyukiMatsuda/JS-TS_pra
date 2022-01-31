// K は T のkey名に限定される
const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

// K は T のkey名に限定される, セットするvalueも限定する
const setProperty = <T, K extends keyof T>(obj: T, key: K, value: T[K]) => {
  obj[key] = value;
};

const obj = {
  foo: 1,
  bar: 2,
  baz: 3,
};
const p = getProperty(obj, "foo");

setProperty(obj, "baz", 30);
