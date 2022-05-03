export const UserStatusValue = {
  non: 0,
  init: 1,
  active: 2,
} as const;

type UserStatusKeyType = keyof typeof UserStatusValue;
type UserStatusValueType = typeof UserStatusValue[keyof typeof UserStatusValue];

export const getKeyByValue = <
  OBJECT extends Record<string | number, any>,
  KEY extends keyof OBJECT,
  VALUE extends OBJECT[KEY]
>(
  obj: OBJECT,
  val: VALUE
): KEY => {
  const keyValueReversedObj: Record<VALUE, KEY> = Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );

  return keyValueReversedObj[val];
};

const key = getKeyByValue(UserStatusValue, 2);
console.log(key);
