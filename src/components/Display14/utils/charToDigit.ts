const charToDigit = {
  // 14-segment display definition (15th segment is "." symbol after each digit):
  // https://blog.wika.com/files/2014/05/7-14-segment-display.jpg [g1 == G, g2 == N)
  //    A  B  C  D  E  F  G  N  H  I  J  K  L  M  O
  ' ': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  '.': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  '0': [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  '1': [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  '2': [1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  '3': [1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  '4': [0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  '5': [1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  '6': [1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  '7': [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  '8': [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  '9': [1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  a: [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  b: [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  c: [1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
  d: [1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
  e: [0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
  f: [1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
  g: [1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
  h: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  i: [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
  j: [1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
  A: [1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  B: [1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
  C: [1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  D: [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
  E: [1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  F: [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  G: [1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  H: [0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  I: [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
  J: [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  K: [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0],
  L: [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  M: [0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0],
  N: [0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  O: [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  P: [1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  Q: [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  R: [1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0],
  S: [1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  T: [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
  U: [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  V: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  W: [0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
  X: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0],
  Y: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
  Z: [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  '-': [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
} as { [key: string]: number[] }

export default charToDigit
