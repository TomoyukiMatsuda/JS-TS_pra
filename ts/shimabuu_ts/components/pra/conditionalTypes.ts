type Props = {
  id: string;
  name: string;
  age: number;
};

// MappedTypes
type Filter<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

// "id" | "name" となる
type StringKeys = Filter<Props, string>;
