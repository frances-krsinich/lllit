export function getRandomIndex<T>(arr: T[]): number {
  return Math.floor(Math.random() * arr.length)
}

export function replaceRandomWord(original: string, separator: string, replacement: string){
  const split = original.split(separator)
  split[getRandomIndex(split)] = replacement
  return split.join(separator)
}