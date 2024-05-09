import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./header.module.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log("Toggle Menu");
    }

    return (
        <div className={style.navbar}>
            <Link to="/" className={style.navbarName}>Kinsey Vo</Link>
            <button className={style.hamburgerMenu} onClick={toggleMenu}>
                <span className={style.hamburgerIcon}></span>
            </button>

            <div className={`${style.navbarLinks} ${isMenuOpen ? style.showMenu : ""}`}>
                <Link to="/home" className={style.navbarLink}>Home</Link>
                <Link to="/projects" className={style.navbarLink}>Projects</Link>
                <Link to="/about" className={style.navbarLink}>About</Link>
                <Link to="/contact" className={style.navbarLink}>Contact Me</Link>
            </div>
        </div>
    );
}