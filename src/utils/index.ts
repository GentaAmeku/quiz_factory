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
