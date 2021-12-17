import { createContext, useState } from "react"
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext() 

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context 1',
            rating: 5
        },
        {
            id: 2,
            text: 'This item is from context 2',
            rating: 10
        },
        {
            id: 3,
            text: 'This item is from context 3',
            rating: 6
        }
    ])
    
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    
    // odstrani feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure? U want to delete')){
            setFeedback(feedback.filter((index) => index.id !== id))
        }
    }
    
    // Prida feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }


    // nastavy item aby sa updatoval
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }
    
    // Update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
    }

    return <FeedbackContext.Provider value={{
        feedback: feedback, // je to to iste ako iba => feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext