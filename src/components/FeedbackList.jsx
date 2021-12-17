import { useContext } from 'react'
// import {motion} from 'framer-motion'
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../context/FeedbackContext'


function FeedbackList() {
    const {feedback} = useContext(FeedbackContext)

    console.log(feedback)
    if(!feedback || feedback.length === 0) {
        return <p>No Feedback yet</p>
    }

    return <div className="feedback-list">
        

        {feedback.map((item) => (
            
            <FeedbackItem key={item.id}  item={item} ></FeedbackItem>
            
            ))}
            
        
        </div>
    
    // BEZ ANIMACIE VERZIA !!!!!!!!!!!!!!!!!!!!
    // return <div className="feedback-list">
    //     {feedback.map((item) => (
            
    //         <FeedbackItem key={item.id}  item={item} handleDelete={handleDelete}></FeedbackItem>
    //     ))}
        
    //     </div>
        
    
}


export default FeedbackList
