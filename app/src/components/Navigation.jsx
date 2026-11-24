import {Fihome, FiBookmark, FiStar, FiSettings} from 'react-icons/fi'

function Navigation() {
    return (
        <nav className="navigation">
            <a href="#" className="navigation__link">
                <FiHome />
                <span>Home</span>
            </a>
            <a href="#" className="navigation__link">
            <FiBookmark />
            <span>Archive</span>
            </a>
            <a href="#" className="navigation__link">
                <FiStar />
                <span>Popular</span>
            </a>
            <a href="#" className="navigation__link">
                <FiSettings />
                <span>Settings</span>
            </a>
        </nav>
    )
}

export default Navigation