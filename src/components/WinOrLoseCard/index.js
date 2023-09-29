import useSound from 'use-sound'
import successMusic from '../../success.wav'
import failureMusic from '../../GameFailure.wav'
import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'
  const [play1]=useSound(successMusic)
  const [play2]=useSound(failureMusic)
  isWon ? play1() : play2()

const playAgain=()=>{
    onClickPlayAgain(score)
}

  return (
   <div className='align'>
     <div className="win-or-lose-card">
       <h1>hello world</h1>
     </div>
   </div>
   
  )
}

export default WinOrLoseCard
