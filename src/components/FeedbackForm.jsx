import { useState, useContext, useEffect } from "react"

import RatingSelect from "./RatingSelect"
import Card from "./shared/Card"
import Button from "./shared/Button"
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)
    
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 8) {
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        } else {
            setMessage('')
            setBtnDisabled(false)
        }
        return setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 8) {
            const newFeedback = {
                text: text,
                rating: rating
            }
            if(feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)

            }
            setText('')
        } else if(text.trim().length < 8 && text.trim().length > 0) {
            alert('Text must be at least 10 characters')
        } else {
            alert('You are trying to add an empty feedback')
        }
    }

    return (
        <Card>
        <form onSubmit={handleSubmit}>
            <h2> How would u rate your service with us</h2> 
            <RatingSelect select={(iRating) => setRating(iRating)}/>
            <div className="input-group">
                <input value={text} onChange={handleTextChange} type="text" placeholder='write a review'></input>
                <button type="submit"  className="btn btn-secondary" >Send</button>
            </div>

            {message && <div className="message">{message}</div>}
        </form>           
        </Card>
    )
}

export default FeedbackForm

