import './index.css'

const EmojiCard = props => {
  const {emojiDetails} = props
  const {emojiName, emojiUrl} = emojiDetails

  return (
    <li className="emoji-item">
      <button type="button" className="emoji-btn">
        <img className="emoji-icon" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
