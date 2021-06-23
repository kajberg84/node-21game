/**
 * Module for Discardpile.
 *
 * @module DiscardPile
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */

import { Deck } from './Deck.js'
let discardPile = []

/**
 * Discardpile.
 *
 * @function discardCards - Throws cards in hand to the discardpile.
 * @param {player} player - Player or dealer.
 */
export function discardCards (player) {
  for (let i = 0; i < player.hand.length; i++) {
    discardPile.push(player.hand[i])
  }
  player.hand = []
}

/**
 * Get last card from deck and return a shuffled discardpile.
 *
 * @param {Array} playingCards - The last card in deck.
 * @returns {Array[]} - Array of objects.
 */
export function discardReset (playingCards) {
  discardPile.push(playingCards[0])
  const shuffleCards = [...Deck.shuffle(discardPile)]
  discardPile = []
  return shuffleCards
}
