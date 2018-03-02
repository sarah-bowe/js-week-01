/*
 * In JS, arrow function syntax allows us to return a
 * result from the right side of the fat arrow (=>).
 * 
 * Make the tests pass by completing or changing
 * the statements below each fat arrow.
 * 
 * For now, don't worry about the rest of the syntax
 * or even what the functions are doing. Just focus
 * on practicing and applying what you've learned.
 */


const fortyTwo = () =>
  // write an expression that returns a value of 42
  // remember, values are expressions, too
  4


const helloWorld = () =>
  // complete the string to return 'Hello World'
  "Hello " + ""


const twoTrue = () =>
  // make it true! what's identical to 2?
  2 === 3


const trueNotTwo = () =>
  // make it true! what's not identical to 2?
  2 !== 2


const twoPlusTwo = () =>
  // make it true! what is equal to 2 + 2?
  2 + 2 === 5


const sorryNotTrue = () =>
  // make it false by replacing the quotes with
  // something else! need a hint? see p. xvi
  '1, 2, 3' === '1, 2, 3'


const ohYeahDecimals = () =>
  // make it true!
  1.0 + 1.0 + 1.0 === 4


const ohNoDecimals = () =>
  // make it true by changing only the right side!
  // (hint: use the JS console or see p. 3)
  0.1 + 0.1 + 0.1 === 0.3


const waxingParenthetical = () =>
  // make it true, only by adding parentheses
  2 * 5 + 1 === 12


const playOperation = () =>
  // make it true by changing only one number
  3 / 3 * 6 === 18


const thatModulusTho = () =>
  // do you remember remainders?
  // replace one of the 2s with another
  // number to make this true
  6 % 2 === 1 - 2


/*
 * You've learned a little bit about types from the reading.
 * In JS, there's a special operator 'typeof' that returns
 * the data type of a thing as a string. Make the following true
 * by filling in the empty strings ('') with the right answers.
 */

const whatTypePartOne = () => typeof 42 === ''


const whatTypePartTwo = () => typeof 0XF === ''


const whatTypePartThree = () => typeof 'yo-yo' === ''


const whatTypePartFour = () => typeof true === ''


const whatTypePartFive = () => typeof 'true' === ''


const whatTypePartSix = () => typeof false === ''


const whatTypePartSeven = () => typeof [1, 2, 3] === '' // this one's tricky



// that's all! ignore this stuff for now

module.exports = {
  fortyTwo, helloWorld, twoTrue, trueNotTwo, twoPlusTwo,
  sorryNotTrue, ohYeahDecimals, ohNoDecimals, waxingParenthetical,
  playOperation, thatModulusTho, whatTypePartOne, whatTypePartTwo,
  whatTypePartThree, whatTypePartFour, whatTypePartFive,
  whatTypePartSix, whatTypePartSeven
}