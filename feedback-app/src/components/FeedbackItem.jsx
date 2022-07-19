function FeedbackItem({item}) {
    // what the function returns = default
    // name of state, function of state
    
    return (
        <div className='card'>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
        </div>
    )
}

export default FeedbackItem


// built-in React object that is used to contain data or
// information about the component. A component's state
//can change over time; whenever it changes, the component re-renders
// <div className="text-display">{text}</div> output of a state
