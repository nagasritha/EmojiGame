import {Component} from 'react'
import './index.css'

class EmojiGame extends Component{
    render(){
        const {emojisList}=this.props
        console.log(emojisList)
        return <div>
            {emojisList.map(item=>
                <h1 key={item.id}>{item.emojiName}</h1>)}
        </div>
    }
}

export default EmojiGame