import { gameController } from './controllers/gameController'
import './style.css'
import { render } from './utils/dom'

const game = await gameController.initGame()
render('app', game, true)