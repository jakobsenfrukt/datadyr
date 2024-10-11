export function randomChoice(array: any[]): any | undefined {
  return array.length
    ? array[Math.floor(Math.random() * array.length)]
    : undefined;
}
