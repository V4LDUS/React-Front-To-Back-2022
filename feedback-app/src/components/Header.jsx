import PropTypes from 'prop-types'

function Header({ text }) { // or type { text } so you don't need to type props.text, just text
  return (
    <header>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
}

// if you type a different value than string in App.js
// it'll give an error, because it's restricted to string
// to make the application more robust
Header.propTypes = {
    text: PropTypes.string,
}

export default Header