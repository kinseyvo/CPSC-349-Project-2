import React, { useEffect, useState } from "react";
import kinsey from "../assets/kinsey.jpeg";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import style from "../styles/about.module.css";

export default function About() {
    const [showSocialMedia, setShowSocialMedia] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Preload image to attempt less lag when opening the page
        const img = new Image();
        img.src = kinsey;
        img.onload = () => {
            // Once the image is loaded, the animation will activate
            setFadeIn(true);
        };
    }, []);

    // If image is clicked, social medias will show/hide under the list
    const handleImageClick = () => {
        setShowSocialMedia(!showSocialMedia);
    };

    return (
        <div className={`${style.aboutPage} ${fadeIn ? style.fadeIn : ""}`}>
            <section className={style.bioSection}>
                <div className={style.imageContainer} onClick={handleImageClick}>
                    <img src={kinsey} alt="Kinsey Vo" />
                </div>
                <div className={style.bioText}>
                    <h1 className={style.centerText}>About Me! 🙋‍♂️</h1>
                    <ul className={style.bioList}>
                        <li>✏️ Currently, I'm pursuing a degree in Computer Science at CSUF.</li>
                        <li>💻 I enjoy the challenges of building innovative solutions, especially in web and mobile app development.</li>
                        <li>📱 I believe that applications should enhance the lives and add value to the user experience.</li>
                        <li>🗿 In my free time, I enjoy hanging out with friends and family, hitting the gym, catching up on my backlog of hobbies, and trying out new activities!</li>
                        <li>💝 Learning is always a gift.</li>
                    </ul>
                    {showSocialMedia && (
                        <div className={style.socialMediaLinks}>
                            <a className={style.linkedin} href="https://www.linkedin.com/in/kinsey-vo/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a className={style.github} href="https://github.com/kinseyvo" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a className={style.instagram} href="https://www.instagram.com/kinsey.vo/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a className={style.youtube} href="https://www.youtube.com/c/OverlordKinsey" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};