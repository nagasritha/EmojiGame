import useSound from 'use-sound'
import successMusic from '../../success.wav'
import failureMusic from '../../GameFailure.wav'
import './index.css'

const WinOrLoseCard = props => {
  const {isWon}=props
  const [play1]=useSound(successMusic)
  const [play2]=useSound(failureMusic)
  isWon ? play1() : play2()
  return (
   <div className='align'>
     <div className="win-or-lose-card">
       <h1>hello world</h1>
     </div>
   </div>
   
  )
}

export default WinOrLoseCard
