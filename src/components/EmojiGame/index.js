import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import './index.css'

class EmojiGame extends Component{
    state={
        displayList:this.props.emojisList,
    }
    
    clickEmoji=(id)=>{
      const {emojisList}=this.props
      this.setState({displayList:emojisList.sort(()=>Math.random()-0.5)})
    }

    renderEmojisList=()=>{
      const {displayList}=this.state
      return (
        <div className='emojis-list-container'>
            {displayList.map(item=><EmojiCard clickEmoji={this.clickEmoji} emojiDetails={item} key={item.id}/>)}
        </div>
      )
    }
    
    render(){
     return (
        <div className='app-container'>
            <div className='enmoji-game-body'>
               {this.renderEmojisList()}          
            </div>
        </div>
     )
    }
}

export default EmojiGame