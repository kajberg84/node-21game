/**
 * Module for printing Result of game.
 *
 * @module ResultOfGame
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Comparing the result!
 *
 * @param {player} player - Player for compare.
 * @param {dealer} dealer - Dealer for compare.
 * @returns {string} - Returns string of who wins.
 */
export function compareResult (player, dealer) {
  if (player.handValue() === 21 || (player.hand.length === 5 && player.handValue() < 21)) {
    return 'Player'
  } else if (player.handValue() > 21) {
    return 'Dealer'
  } else if (dealer.handValue() <= 21 && dealer.handValue() >= player.handValue()) {
    return 'Dealer'
  }
  return 'Player'
}

/**
 * Printing out the result.
 *
 * @param {player} player - Player.
 * @param {dealer} dealer - Dealer.
 * @param {string} gameResult - String of the winner.
 * @function resultOfGame - Print result.
 */
export function printResult (player, dealer, gameResult) {
  const winner = `\nResult: ${gameResult} wins!\n`
  const printPlayerHand = `Player #${player.number}: ${player.hand} (${player.handValue()}) ${player.handValue() > 21 ? 'Busted!' : ''}\n`
  let printDealerHand = 'Dealer: -'
  if (dealer.hand.length > 0) {
    printDealerHand = `Dealer: ${dealer.hand} (${dealer.handValue()}) ${dealer.handValue() > 21 ? 'Busted!' : ''}`
  }
  console.log(printPlayerHand + printDealerHand + winner)
}
