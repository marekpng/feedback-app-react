import PropTypes from 'prop-types'

function Button({children, version, type}) {
    return (
        // <Button type={type} disable={isDisabled} className={`btn btn-${version}`}>
        //     {children}
        // </Button>
        <Button type={type}  className={`btn btn-${version}`}>
            {children}
        </Button>
    )
}

// Button.defaultProps = {
//     version: 'primary',
//     type: 'button',
//     isDisable: false 
// }
// Button.propTypes = {
//     children: PropTypes.node.isRequired,
//     version: PropTypes.string,
//     type: PropTypes.string,
//     isDisabled: PropTypes.bool
// }

export default Button
