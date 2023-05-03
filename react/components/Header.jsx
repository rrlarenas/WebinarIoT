import React from 'react'
import PropTypes from 'prop-types'
import { FaTemperatureHigh } from 'react-icons/fa'
import { Link} from 'react-router-dom'
import Navbar from './Navbar'

function Header({ text, init }) {
      return (
        <>
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">

                    <Link to='/temperatura' className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'>
                        <FaTemperatureHigh className='inline pr-2 text-3xl' />
                        <span className="fs-4"> {text}</span>
                    </Link>
                    <Navbar init = {init} />


                </header>
            </div>

        </>
    )
}

Header.defaultProps = {
    text: 'Arduino Meter',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#fff'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}
export default Header