import './Tweet.css'
import { ArrowsClockwise, Heart, ChatCircle } from "phosphor-react"
import { Link } from 'react-router-dom'

interface TweetProps {
    content: string
}

export function Tweet(props: TweetProps) {
    return(
        <Link to="./status" className="tweet">
          <img src="https://avatars.githubusercontent.com/u/81479075?v=4" alt="António Miranda Quintas" />

            <div className="tweet-content">
                
                <div className="tweet-content-header">
                    <strong>António Miranda Quintas</strong>
                    <span>@antoniomirandaquintas</span>
                </div>

                <p>{props.content}</p>

                <div className="tweet-content-footer">
                    <button type="button">
                        <ChatCircle />
                        20
                    </button>
                    
                    <button type="button">
                        <ArrowsClockwise />
                        20
                    </button>

                    <button type="button">
                        <Heart />
                        20
                    </button>
                </div>

            </div>           
        </Link> 
    )

}