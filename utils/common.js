export function keyValueList(object) {
  return Object.keys(object).map((value) => ({
    value,
    title: object[value],
  }));
}
