export type User = {
  name: string;
} & PersonalData;

type Figi = "height" | "weight";

type PersonalData = {
  [K in Figi]: number;
};

const user: User = {
  name: "まつ",
  height: 175,
  weight: 57,
};
