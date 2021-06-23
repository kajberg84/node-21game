/**
 * Module for a player.
 *
 * @module Player
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */
import { PlayerBase } from './PlayerBase.js'
/**
 * Represents a player
 *
 * @param number - The players number.
 * @param hand - The players cards.
 * @param lowLimit - Randomize a number where the player is happy.
 * @function drawCard - Draw cards.
 * @function handValue - Calculates the sum of the cards in hand.
 * @class
 */
export class Player extends PlayerBase {
  constructor (number) {
    super()
    this.number = number
    this.lowLimit = Math.ceil(Math.random() * 5) + 13 // Randomize 14-18.
  }
}
