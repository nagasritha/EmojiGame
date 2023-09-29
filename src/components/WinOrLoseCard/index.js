import useSound from 'use-sound'
import successMusic from '../../success.wav'
import failureMusic from '../../GameFailure.wav'
import './index.css'

const WinOrLoseCard = props => {
  const {isWon,onClickPlayAgain,score}=props
  const [play1]=useSound(successMusic)
  const [play2]=useSound(failureMusic)
  isWon ? play1() : play2()
  const playAgain=()=>onClickPlayAgain(score)
  const gameStatus=isWon ? 'You Won' : 'You Lose'
  const scoreLabel=isWon ? 'Best Score' : 'Score'
  return (
   <div className='align'>
     <div className="win-or-lose-card">
     <div className="details-section">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="current-score-label">{scoreLabel}</p>
        <p className="current-score-value">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={playAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img className="win-or-lose-image" src={isWon ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png' : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'} alt="win or lose" />
      </div>
     </div>
   </div>
   
  )
}

export default WinOrLoseCard
