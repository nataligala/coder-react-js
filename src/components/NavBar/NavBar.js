import './NavBar.scss';

export const NavBar = () => {


    return ( 
    
        <header className="header">
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">INICIO</li>
                    <li className="nav-item">PRODUCTOS</li>
                    <li className="nav-item">NOVEDADES</li>
                    <li className="nav-item">CONTACTO</li>
                </ul>
            </nav>
        </header>
    )
}