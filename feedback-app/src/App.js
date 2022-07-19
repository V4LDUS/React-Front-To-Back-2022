import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import {useState} from 'react'
import FeedbackData from "./data/FeedbackData"

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    return (
    <>
        <Header />
        <div className="container">
            <FeedbackList feedback={feedback}/>
        </div> 
    </>   
    )
}

// feedback={feedback} is a prop

// <Header text='Hello World' /> the text is a prop
// you need to pass a prop so you can catch it as an argument
// from the other program "Header.jsx"

export default App