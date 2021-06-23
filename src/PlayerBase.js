/**
 * Basemodule for anyone who plays.
 *
 * @module BaseModule
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents a person who plays.
 *
 * @param hand - The persons cards.
 * @param lowLimit - Randomize a number where the person is happy.
 * @function drawCard - Draw cards.
 * @function handValue - Calculates the sum of the cards in hand.
 * @class
 */
export class PlayerBase {
  constructor () {
    this.hand = []
    this.lowLimit = Math.ceil(Math.random() * 2) + 14
  }

  get hand () {
    return this._hand
  }

  set hand (value) {
    this._hand = value
  }

  drawCard (playingCards) {
    const card = playingCards.shift()
    this._hand.push(card)
  }

  handValue () {
    let sum = 0
    for (let i = 0; i < this._hand.length; i++) {
      if (this._hand[i].valueOf() === 1) { // Want the Ace to Calculate as 14 from start for easier handling.
        sum += 14
      } else {
        sum += this._hand[i].valueOf()
      }
    }
    if (sum > 21) { // If person draws over 21, checks if ace in hand then calculate it as 1.
      for (let i = 0; i < this._hand.length; i++) {
        if (this._hand[i].valueOf() === 1) {
          sum -= 13
        }
      }
    }
    return sum
  }
}
