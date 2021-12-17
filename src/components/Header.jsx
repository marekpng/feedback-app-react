import PropTypes from 'prop-types'
import {motion} from 'framer-motion'

function Header( {hocjakyText, bgColor, textColor}) {
    const headerStyles= {
        backgroundColor: bgColor,
        color: textColor
    }
    return (
        <header style={headerStyles}>
            <div className="container">
                
                <h2>{hocjakyText}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    hocjakyText: 'Defualtny textik',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

// Header.propTypes = {
//     hocjakyText: PropTypes.string.isRequired,
//     bgColor: PropTypes.string,
//     textColor: PropTypes.string
// }

export default Header
