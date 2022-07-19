import React from 'react'

// Main app component
// So basically it's kinda HTML under the hood

function App() {
    const title = 'Blog post'
    const body = 'This is my blog post'
    const comments = [
        {id: 1, text: 'Comment one'},
        {id: 2, text: 'Comment two'},
        {id: 3, text: 'Comment three'},
    ]

    const loading = false
    const showComments = true
    // This variable will be put in the if condition
    // of showComments to be displayed
    const commentBlock = (
        <div className='comments'>
            <h3> Comments({comments.length})</h3>
            <ul>
                
                {comments.map((comment, index) => (
                <li key={index} >{comment.text}</li>
                ))}
            </ul>
        </div>
)
// A replacement for the '?' is putting '&&'
// and you won't need an else statement in the one liner
    return (
        <div className="container">
            <h1>{title}</h1>
            <p>{body}</p>

            {showComments && commentBlock}

        </div>    
    ) // .map array method to put comment.text from comments
    // and there must be a unique key in each child list
}
// <h1>Hello from the app component</h1>
// <p>This is a paragraph</p>
// will cause an error because there's no enclosing, have to add div
// You gotta have one parent element, can even be empty brackets '<>'

//// HTML VS JSX



// something else than JSX
// function App() {
//     return React.createElement(
//         'div', { className: 'container'},
//         React.createElement('h1', {}, 'My App'),
//         React.createElement('p', {}, 'A paragraph')
//     )
// }

export default App