import useSound from 'use-sound'
import music from '../../1secSound.wav'
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const [play]=useSound(music)

  const onClickEmojiCard = () => {
    clickEmoji(id)
    play()
  }

  return (
    <li className="emoji-item">
      <button type="button" className="emoji-btn" onClick={onClickEmojiCard}>
        <img className="emoji-icon" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
