import Header from "./components/Header"

function App() {
    return ( // <Header text='Hello World' />
    <>
        <Header text={true} />
        <div className="container">
            <h1>My App</h1>
        </div> 
    </>   
    )
}

// <Header text='Hello World' /> the text is a prop
// you need to pass a prop so you can catch it as an argument
// from the other program "Header.jsx"

export default App