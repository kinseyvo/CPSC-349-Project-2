import React, { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaMessage, FaGithub } from "react-icons/fa6";
import style from "./contact.module.css";

export default function Contact() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className={style.pageContainer}>
            <div className={style.background} />
            <div className={`${style.contentWrapper} ${isLoaded && style.loaded}`}>
                <div className={style.contactContent}>
                    <h1>🚀Contact Me!🚀</h1>
                    <div className={style.contactFormContainer}>
                        <form action="https://formspree.io/f/mpzvnwzy" method="POST">
                            <input type="hidden" name="_subject" value="New Message from Contact Form" />
                            <div className={style.formGroup}>
                                <label htmlFor="name"><FaUser /> Name:</label>
                                <input required type="text" id="name" name="name" />
                            </div>
                            <div className={style.formGroup}>
                                <label htmlFor="email"><FaEnvelope /> Email:</label>
                                <input required type="email" id="email" name="email" />
                            </div>
                            <div className={style.formGroup}>
                                <label htmlFor="message"><FaMessage /> Message:</label>
                                <textarea required name="message" id="message" rows={5}></textarea>
                            </div>
                            <button type="submit" className={style.submitButton}>Submit</button>
                        </form>
                    </div>
                    <div className={style.socialMedia}>
                        <h1>🤝Connect with me!🤝</h1>
                        <div className={style.socialIcons}>
                            <a href="https://www.linkedin.com/in/kinsey-vo/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href="https://github.com/kinseyvo" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href="https://www.instagram.com/kinsey.vo/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://www.youtube.com/c/OverlordKinsey" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};