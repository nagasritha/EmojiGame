import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import WinOrLosscard from '../WinOrLoseCard'
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
      console.log(clickedEmojisList)
      console.log(clickedEmojisList.length===11)
      
      if(!bool){
        if(clickedEmojisList.length===11){
          return this.setState(prevState=>({clickedEmojisList:[...prevState.clickedEmojisList,id],isGameInProgress:false}))
        }
         return this.setState(prevState=>({clickedEmojisList:[...prevState.clickedEmojisList,id],displayList:shuffledList}))
      }
      return this.setState({isGameInProgress:false})    
    }

    renderEmojisList=()=>{
      const {displayList}=this.state
     
      return (
        <div className='emojis-list-container'>
            {displayList.map(item=><EmojiCard clickEmoji={this.clickEmoji} emojiDetails={item} key={item.id}/>)}
        </div>
      )
    }

    resetGame=(currentScore)=>{
      const {topScore} = this.state
      let newTopScore = topScore
  
      if (currentScore > topScore) {
        newTopScore = currentScore
      }

      this.setState(prevState=>({clickedEmojisList:[],isGameInProgress:!prevState.isGameInProgress,topScore: newTopScore,}))
    }

    resultView=(currentScore)=>{
      return <WinOrLosscard/>
    }

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
               {isGameInProgress ? this.renderEmojisList() : this.resultView(clickedEmojisList.length)}          
            </div>
        </div>
     )
    }
}

export default EmojiGame