/*
 * DELIBERATE SONARQUBE TEST FIXTURE - contains intentional reliability bugs.
 * Not imported anywhere in the application.
 */

export function selfAssignment (value: number) {
  let x = value
  x = x
  return x
}

export function alwaysTrue (value: number) {
  if (value === value) {
    return 'always'
  }
  return 'never'
}

export function nanComparison (value: number) {
  return value === NaN
}

export function unreachableCode () {
  return 1
  console.log('never runs')
}

export function identicalBranches (flag: boolean) {
  if (flag) {
    return 'same'
  } else {
    return 'same'
  }
}

export function identicalOperands (a: number) {
  return a - a
}

async function fetchValue () {
  return await Promise.resolve(42)
}

export async function missingAwait () {
  const result = fetchValue()
  if (result) {
    return 'promise is always truthy'
  }
}

export function ignoredReturnValue (text: string) {
  text.trim()
  text.toUpperCase()
  return text
}

export function duplicateCondition (n: number) {
  if (n > 1) {
    return 'a'
  } else if (n > 1) {
    return 'b'
  }
  return 'c'
}

export function switchFallthrough (n: number) {
  let out = ''
  switch (n) {
    case 1:
      out = 'one'
    case 2:
      out = 'two'
      break
    default:
      out = 'many'
  }
  return out
}

export function sparseArray () {
  const list = [1, , 3]
  return list
}

export function nullDeref (obj: { a?: { b: number } } | null) {
  if (obj === null) {
    return obj.a
  }
  return 0
}
