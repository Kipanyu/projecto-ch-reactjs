import './navbar.scss'

export const NavBar = () => {
    
    return (
        <header className="header">
            <div className='header__container'>
                
                <h1 className="header__logo">Proyecto ReactJs Coderhouse</h1>
                <nav className="header__navbar">
                <li className="header__navlink">boton 1</li>
                <li className="header__navlink">boton 2</li>
                <li className="header__navlink">boton 3</li>
                </nav>
            </div>
        </header>
    )
}

