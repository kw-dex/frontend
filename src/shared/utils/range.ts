export default function range(from: number, to: number) {
  const array = new Array(to - from + 1).fill(0)

  return array.map((_, i) => i + from)
}