/**
 * Module for errorhandling.
 *
 * @module ErrorHandling
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Check for wrong startinput.
 *
 * @throws {InputError} - Throws error if its not a number, NaN, decimal or not in the intervall.
 * @returns {number} - Players the application allows, 3 if not stated.
 */
export function playerInputCheck () {
  const check = Number(process.argv.slice(2, 3))
  if (isNaN(check) || typeof check !== 'number') {
    throw new InputError('The inputnumber of players may only contain valid numbers.')
  }
  if (!Number.isInteger(check)) {
    throw new InputError(`${check} must be an integer.`)
  }
  if ((check >= 1 && check <= 7) || check === 20 || check === 50) {
    return check
  } else if (check > 7) {
    throw new InputError('The input number of players must be between 1-7, 20 or 50.')
  }
  return 3
}

/**
 * InputError.
 *
 * @class
 */
export class InputError extends Error {
  constructor (text) {
    super(text)
    this.name = 'InputError.'
  }
}

/**
 * CardError.
 *
 * @class
 */
export class CardError extends Error {
  constructor (text) {
    super(text)
    this.name = 'CardError'
  }
}
