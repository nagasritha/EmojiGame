import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import './index.css'

class EmojiGame extends Component{
    render(){
     const {emojisList}=this.props
     return (
        <div className='app-container'>
            <div className='enmoji-game-body'>
               <div className='emojis-list-container'>
                 {emojisList.map(item=><EmojiCard emojiDetails={item} key={item.id}/>)}
               </div>
            </div>
        </div>
     )
    }
}

export default EmojiGame