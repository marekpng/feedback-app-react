
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"

import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'

import {FeedbackProvider} from './context/FeedbackContext'


function App() {
    

    
    return (
        
        <FeedbackProvider>
        
        <Header  hocjakyText="Feedback App"/>
        <div className='container'>
            <FeedbackForm  />
            <FeedbackStats />
            <FeedbackList  /> 
            
        </div>
        </FeedbackProvider>
        
        
    )
}

export default App