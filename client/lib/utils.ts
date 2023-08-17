export function getRandomIndex<T>(arr: T[]): number {
  return Math.floor(Math.random() * arr.length)
}

export function replaceRandomWord(original: string, separator: string, replacement: string){
  const split = original.split(separator)
  split[getRandomIndex(split)] = titleCaseString(replacement)
  return split.join(separator)
}

function titleCaseString(original: string) {
  return original.charAt(0).toUpperCase() + original.slice(1)
}