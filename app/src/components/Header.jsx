import logo from '../assets/logo.svg'

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="Newsify logo" />
                <h1>Newsify</h1>
            </div>

            <input type="text" className="header__search" placeholder='Search news'/>
        </header>
    )
}

export default Header