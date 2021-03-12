export function getRandomNumberArray(length: number, maxValue = 10): number[] {
  return Array.from({ length }).map(() => Math.floor(Math.random() * maxValue));
}
