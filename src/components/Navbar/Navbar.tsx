import "./Navbar.scss"

// * Tools
import { useSelector } from "react-redux";
import { useState, MouseEvent } from "react";

function Navbar(): JSX.Element {
    const [showMobile, setShowMobile] = useState(false);
    const user = useSelector((state: any) => state.user);
    const loggedIn = user.loggedIn;

    const toggleMobileMenu = (evt: MouseEvent) => {
        evt.preventDefault();
        setShowMobile(!showMobile)

    }
    if (loggedIn) {
        return (
            <div className="Navbar">
                <div className="Navbar-logo">
                    <a className="Navbar-logo-title" href="/">
                        <h1>Eventos</h1>
                    </a>
                </div>
                <nav className="Navbar-nav">
                    <ul className="Navbar-nav-list">
                        <li><a href="/dashboard" className="Navbar-nav-list-link">Dashboard</a></li>
                        <li><a href="/register" className="Navbar-nav-list-link">Registra tu Asistencia</a></li>
                        <li><a href="/soon" className="Navbar-nav-list-link">Proximos Eventos</a></li>
                        <li><a href={loggedIn ? "/account" : "/login"} className="Navbar-nav-list-link">{loggedIn ? 'Mi Perfil' : "Iniciar Sesión"}</a></li>
                    </ul>
                </nav>
                <div className="Navbar-burger">
                    <button className="Navbar-burger-button" onClick={toggleMobileMenu}>
                        <i className="material-icons">menu</i>
                    </button>
                </div>
                <div className={"Navbar-mobile" + (showMobile ? " showMobile" : "")}>
                    <button className="Navbar-mobile-closebtn" onClick={toggleMobileMenu}>
                        <i className="material-icons">close</i>
                    </button>
                    <nav className="Navbar-mobile-nav">
                        <ul className="Navbar-mobile-nav-list">
                            <li><a href="/dashboard" className="Navbar-mobile-nav-list-link">Dashboard</a></li>
                            <li><a href="/register" className="Navbar-mobile-nav-list-link">Registra tu Asistencia</a></li>
                            <li><a href="/soon" className="Navbar-mobile-nav-list-link">Proximos Eventos</a></li>
                            <li><a href={loggedIn ? "/account" : "/login"} className="Navbar-mobile-nav-list-link">{loggedIn ? 'Mi Perfil' : "Iniciar Sesión"}</a></li>
                        </ul>
                    </nav>
                </div>
            </div >
        )
    }
    return (
        <div className="Navbar">
            <div className="Navbar-logo">
                <a className="Navbar-logo-title" href="/">
                    <h1>Eventos</h1>
                </a>
            </div>
            <nav className="Navbar-nav">
                <ul className="Navbar-nav-list">
                    <li><a href="/register" className="Navbar-nav-list-link">Registra tu Asistencia</a></li>
                    <li><a href="/soon" className="Navbar-nav-list-link">Proximos Eventos</a></li>
                    <li><a href={loggedIn ? "/account" : "/login"} className="Navbar-nav-list-link">{loggedIn ? 'Mi Perfil' : "Iniciar Sesión"}</a></li>
                </ul>
            </nav>
            <div className="Navbar-burger">
                <button className="Navbar-burger-button" onClick={toggleMobileMenu}>
                    <i className="material-icons">menu</i>
                </button>
            </div>
            <div className={"Navbar-mobile" + (showMobile ? " showMobile" : "")}>
                <button className="Navbar-mobile-closebtn" onClick={toggleMobileMenu}>
                    <i className="material-icons">close</i>
                </button>
                <nav className="Navbar-mobile-nav">
                    <ul className="Navbar-mobile-nav-list">
                        <li><a href="/register" className="Navbar-mobile-nav-list-link">Registra tu Asistencia</a></li>
                        <li><a href="/soon" className="Navbar-mobile-nav-list-link">Proximos Eventos</a></li>
                        <li><a href={loggedIn ? "/account" : "/login"} className="Navbar-mobile-nav-list-link">{loggedIn ? 'Mi Perfil' : "Iniciar Sesión"}</a></li>
                    </ul>
                </nav>
            </div>
        </div >
    )
}

export default Navbar;