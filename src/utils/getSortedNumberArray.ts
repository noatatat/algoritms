export function getSortedNumberArray(length: number, max = 100): number[] {
  return Array
    .from({ length })
    .map(() => Math.floor(Math.random() * max))
    .sort((a, b) => (a - b));
}
