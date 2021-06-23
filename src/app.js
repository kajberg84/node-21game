/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */
import { Player } from './Player.js'
import { Dealer } from './Dealer.js'
import { sittingDown, startGame } from './StartGame.js'
import { playerInputCheck, InputError, CardError } from './ErrorHandling.js'
import { printResult, compareResult } from './ResultOfGame.js'
import { discardCards } from './Discard.js'

try {
  const dealer = new Dealer()
  const quantityPlayers = playerInputCheck()
  const playerNr = []
  let player

  for (let i = 0; i < quantityPlayers; i++) {
    playerNr[i] = new Player(i + 1)
  }

  for (player of playerNr) {
    sittingDown(player)
  }

  for (player of playerNr) {
    startGame(player, dealer)
    const gameResult = compareResult(player, dealer)
    printResult(player, dealer, gameResult)
    discardCards(player)
    if (dealer.hand.length !== 0) {
      discardCards(dealer)
    }
  }
} catch (err) {
  console.error(err.message)
  process.exitCode = 1
  if (err instanceof InputError) {
    process.exitCode = 26
  }
  if (err instanceof CardError) {
    process.exitCode = 27
  }
}
