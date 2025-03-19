import './navigation.css'
import { NavLink } from 'react-router';

function Navigation(){
    return(
        <nav>
            <ul>
                <li>
                <NavLink to="/" end>
                    Home
                </NavLink>
                </li>
                <li>
                <NavLink to="/products" end>
        Products
      </NavLink>
                </li>
                <li>
                <NavLink to="/about" end>
        About
      </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" end>Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;