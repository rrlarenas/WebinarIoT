
import { Link } from 'react-router-dom'
import {FaQuestion} from 'react-icons/fa'

function AboutIcon(){

    return(
    <div className='about-link'>
        <Link to={{
            pathname: '/about',
            // search:'?sort=name',
            // hash:'#meta'
        }}>
        <FaQuestion size={10}/>
        
        </Link>
    </div>)
}

export default AboutIcon