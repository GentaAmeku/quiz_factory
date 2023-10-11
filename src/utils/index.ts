export function random<T>(array: T[], num: number): T[] {
  const arr = array.slice();
  for (let i = 0; i < num; i++) {
    const j = i + Math.floor(Math.random() * (arr.length - i));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  arr.length = num;
  return arr;
}

export function shuffle<T>(array: T[] | [] = []): T[] {
  const clone = [...array];

  for (let i = clone.length - 1; i >= 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    let tmpStorage = clone[i];
    clone[i] = clone[rand];
    clone[rand] = tmpStorage;
  }

  return clone;
}
