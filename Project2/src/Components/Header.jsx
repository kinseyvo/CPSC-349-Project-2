import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "../styles/header.module.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        //handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log("Toggle Menu");
    }

    return (
        <div className={style.navbar}>
            <Link to="/" className={style.navbarName}>KV</Link>
            <div className={style.menuContainer}>
                <button 
                    className={`${style.hamburgerMenu} ${isMenuOpen ? style.open : ""}`}
                    onClick={toggleMenu}
                >
                    <span className={style.hamburgerIcon}></span>
                </button>
                
                {isMenuOpen && (
                    <div>
                        <Link to="/home" className={style.navbarLink}>Home</Link>
                        <Link to="/projects" className={style.navbarLink}>Projects</Link>
                        <Link to="/about" className={style.navbarLink}>About</Link>
                        <Link to="/contact" className={style.navbarLink}>Contact Me</Link>
                    </div>
                )}
                
                {!isMenuOpen && !isMobile && ( // checks if menu is closed and not mobile
                    <div>
                        <Link to="/home" className={style.navbarLink}>Home</Link>
                        <Link to="/projects" className={style.navbarLink}>Projects</Link>
                        <Link to="/about" className={style.navbarLink}>About</Link>
                        <Link to="/contact" className={style.navbarLink}>Contact Me</Link>
                    </div>
                )}
            </div>
        </div>
    );
}