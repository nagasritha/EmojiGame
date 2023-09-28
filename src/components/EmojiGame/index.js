import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import './index.css'

class EmojiGame extends Component{
    state={
        displayList:this.props.emojisList,
        clickedEmojisList: [],
        isGameInProgress: true,
        topScore: 0,
    }
    
    clickEmoji=(id)=>{
      const {emojisList}=this.props
      const {clickedEmojisList}=this.state
      const shuffledList= emojisList.sort(()=>Math.random()-0.5)

      const bool=clickedEmojisList.includes(id)
      console.log(bool)
      if(!bool){
         return this.setState(prevState=>({clickedEmojisList:[...prevState.clickedEmojisList,id],displayList:shuffledList}))
      } 
      return this.setState(prevState=>({isGameInProgress:!prevState.isGameInProgress}))     
    }

    renderEmojisList=()=>{
      const {displayList}=this.state
      return (
        <div className='emojis-list-container'>
            {displayList.map(item=><EmojiCard clickEmoji={this.clickEmoji} emojiDetails={item} key={item.id}/>)}
        </div>
      )
    }

    resultView=()=><h1>result</h1>
    
    render(){
        const {isGameInProgress,clickedEmojisList,topScore}=this.state
     return (
        <div className='app-container'>
             <NavBar
          currentScore={clickedEmojisList.length}
          isGameInProgress={isGameInProgress}
          topScore={topScore}
        />
            <div className='enmoji-game-body'>
               {isGameInProgress ? this.renderEmojisList() : this.resultView()}          
            </div>
        </div>
     )
    }
}

export default EmojiGame