/**
 * Starting the game.
 *
 * @module GameTable
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */

import { discardReset } from './Discard.js'
import { Deck } from './Deck.js'
import { CardError } from './ErrorHandling.js'

let playingCards = Deck.create() // creates 52 cards.
Deck.shuffle(playingCards) // shuffles the cards.

/**
 * Giving all players a starting card.
 *
 * @param {player} player - object of a player.
 * @function sittingDown
 */
export function sittingDown (player) {
  player.drawCard(playingCards)
}

/**
 * Starting the game.
 *
 * @param {player} player - Object of a player.
 * @param {dealer} dealer - Object of a dealer.
 * @function startGame
 */
export function startGame (player, dealer) {
  drawHand(player)
  if (player.handValue() < 21 && player.hand.length < 5) {
    drawHand(dealer)
  }
}

/**
 * Drawing cards to hand.
 *
 * @param {player} player - Object of a player/dealer.
 * @function drawHand
 * @throws {CardError} - Throws error if no cards left to draw from.
 */
function drawHand (player) {
  while (player.handValue() < player.lowLimit && player.hand.length < 5) {
    if (playingCards.length === 0) {
      throw new CardError('No cards left to draw from.')
    }
    if (playingCards.length === 1) {
      playingCards = discardReset(playingCards)
    }
    player.drawCard(playingCards)
  }
}
