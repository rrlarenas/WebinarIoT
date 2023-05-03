

import { Link ,useLocation} from 'react-router-dom'

import PropTypes from 'prop-types'
function Navbar({ title,init }) {

    const location = useLocation();

    const getClassLocation = (route) => {
        return location.pathname === route ? 'nav-link active':'nav-link'
    }
    return (

       
                    <ul className="nav nav-pills">
                        <li className="nav-item"><Link to='/temperatura' className={getClassLocation('/temperatura')}> Temperatura </Link></li>
                        <li className="nav-item"><Link to='/humedad' className={getClassLocation('/humedad')}> Humedad </Link></li>
                        <li className="nav-item"><Link to='/about' className={getClassLocation('/about')}> About </Link></li>
                    </ul>
          

    )
}
Navbar.defaultProps = {
    title: 'Arduino Iris'
}

Navbar.propTypes = {
    title: PropTypes.string
}
export default Navbar

