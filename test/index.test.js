const index = require('../index')

test('returns 42', () =>
  expect(index.fortyTwo()).toBe(42)
)

test('says "Hello World"', () =>
  expect(index.helloWorld()).toBe('Hello World')
)

test('is identical to 2', () =>
  expect(index.twoTrue()).toBe(true)
)

test('is not identical to 2', () =>
  expect(index.trueNotTwo()).toBe(true)
)

test('is identical to 2 plus 2', () =>
  expect(index.twoPlusTwo()).toBe(true)
)

test('is the same but not identical', () =>
  expect(index.sorryNotTrue()).toBe(false)
)

test('does decimal math okay', () =>
  expect(index.ohYeahDecimals()).toBe(true)
)

test('does more decimal math okay', () =>
  expect(index.ohNoDecimals()).toBe(true)
)

test('has the right order of operations', () =>
  expect(index.waxingParenthetical()).toBe(true)
)

test('does math', () =>
  expect(index.playOperation()).toBe(true)
)

test('identity with a modulus', () =>
  expect(index.thatModulusTho()).toBe(true)
)

test('has the right type of 42', () =>
  expect(index.whatTypePartOne()).toBe(true)
)

test('has the right type of OXF', () =>
  expect(index.whatTypePartTwo()).toBe(true)
)

test('has the right type of "yo-yo"', () =>
  expect(index.whatTypePartThree()).toBe(true)
)

test('has the right type of true', () =>
  expect(index.whatTypePartFour()).toBe(true)
)

test('has the right type of "true"', () => 
  expect(index.whatTypePartFive()).toBe(true)
)

test('has the right type of false', () => 
  expect(index.whatTypePartSix()).toBe(true)
)

test('has the right type of an array', () => 
  expect(index.whatTypePartSeven()).toBe(true)
)