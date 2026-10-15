/*
 * DELIBERATE SONARQUBE TEST FIXTURE - contains intentional code smells.
 * Not imported anywhere in the application.
 */

// TODO: remove this whole file
// FIXME: it is only here to produce findings

export function highComplexity (a: number, b: number, c: number, d: number) {
  let result = 0
  if (a > 0) {
    if (b > 0) {
      if (c > 0) {
        if (d > 0) {
          for (let i = 0; i < a; i++) {
            if (i % 2 === 0) {
              if (i % 3 === 0 || i % 5 === 0) {
                result += i
              } else if (i % 7 === 0 && b > 3) {
                result -= i
              } else {
                result += 1
              }
            } else {
              while (result > 1000) {
                result -= 100
              }
            }
          }
        } else if (d < -10) {
          result = a > b ? (b > c ? 1 : 2) : (c > d ? 3 : 4)
        }
      }
    }
  }
  return result
}

export function tooManyParams (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) {
  return a + b + c + d + e + f + g + h
}

export function emptyCatch () {
  try {
    JSON.parse('{')
  } catch (err) {
  }
}

export function unusedStuff (used: number, unusedParam: string) {
  const unusedLocal = 5
  var legacy = used * 42
  return legacy
}

export function duplicateStrings () {
  const a = 'this is a rather long duplicated literal'
  const b = 'this is a rather long duplicated literal'
  const c = 'this is a rather long duplicated literal'
  const d = 'this is a rather long duplicated literal'
  return [a, b, c, d]
}

export function nestedTernary (n: number) {
  return n > 0 ? (n > 10 ? 'big' : (n > 5 ? 'medium' : 'small')) : 'none'
}

export function magicNumbers (x: number) {
  return x * 86400 + 3600 * 24 - 1337
}

export function leftoverLogging (value: unknown) {
  console.log('debug value', value)
  console.error('debug error', value)
}

// export function oldImplementation (x: number) {
//   const y = x * 2
//   return y + 1
// }

export function booleanLiteral (flag: boolean) {
  if (flag === true) {
    return true
  } else {
    return false
  }
}

export function collapsibleIf (a: boolean, b: boolean) {
  if (a) {
    if (b) {
      return 1
    }
  }
  return 0
}

export function dupBlockOne (items: number[]) {
  let total = 0
  for (const item of items) {
    if (item > 0) {
      total += item * 2
    } else {
      total -= item
    }
  }
  console.log('total', total)
  return total
}

export function dupBlockTwo (items: number[]) {
  let total = 0
  for (const item of items) {
    if (item > 0) {
      total += item * 2
    } else {
      total -= item
    }
  }
  console.log('total', total)
  return total
}

export function dupBlockThree (items: number[]) {
  let total = 0
  for (const item of items) {
    if (item > 0) {
      total += item * 2
    } else {
      total -= item
    }
  }
  console.log('total', total)
  return total
}
