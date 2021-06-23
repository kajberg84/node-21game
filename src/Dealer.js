/**
 * Module for a dealer.
 *
 * @module Dealer
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */

import { PlayerBase } from './PlayerBase.js'

/**
 * Represents a dealer.
 *
 * @param hand - The dealers cards.
 * @param lowLimit - Randomize a number where the dealer is happy.
 * @function drawCard - Draw cards.
 * @function handValue - Calculates the sum of the cards in hand.
 * @class
 */
export class Dealer extends PlayerBase {
  constructor () {
    super()
    this.lowLimit = Math.ceil(Math.random() * 3) + 14 // Random 15-17(a bit safer than the average player)
  }
}
