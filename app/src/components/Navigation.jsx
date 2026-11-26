import {FiHome, FiBookmark, FiStar, FiSettings} from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <nav className="navigation">
            <NavLink to="/" className="navigation__link">
                <FiHome />
                <span>Home</span>
            </NavLink>
            <NavLink to="/archive" className="navigation__link">
                <FiBookmark />
                <span>Archive</span>
            </NavLink>
            <NavLink to="/popular" className="navigation__link">
                <FiStar />
                <span>Popular</span>
            </NavLink>
            <NavLink to="/settings" className="navigation__link">
                <FiSettings />
                <span>Settings</span>
            </NavLink>
        </nav>
    )
}

export default Navigation