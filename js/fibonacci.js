function nthFibo(n) {
  let a = 0
  let b = 1

  if (n === 0) return a

  for (let i = 2; i <= n; i++) {
    let c = a + b
    a = b
    b = c
  }

  return b
}

function nthFiboRecursive(n) {
  if (n === 0) return 0
  if (n === 1) return 1
  return nthFibo(n - 1) + nthFibo(n - 2)
}
