import React, { useState, useEffect } from "react";
import resume from "../assets/Kinsey Vo Resume 2024.pdf";
import style from "../styles/home.module.css";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`${style.container} ${isLoading ? style.slideIn : ""}`}>
            <div className={style.content}>
                <div className={`${style.left} ${isLoading ? style.slideIn : ""}`}>
                    <div className={style.left}>
                        <h2>Hi there, I'm</h2>
                        <p className={style.name}>Kinsey Vo! 👋</p>
                        <p>💻 Software Engineer 💻</p>
                        <a href={resume} target="_blank" rel="noopener noreferrer">
                            <button className={style.button}>View My Resume</button>
                        </a>
                    </div>
                </div>
                <div className={`${style.right} ${isLoading ? style.slideInRight : ""}`}>
                    <p>I'm a software engineer, and I specialize in building and developing web and mobile applications. Recently, I finished my Bachelor's in Computer Science and will be starting my Master's in Software Engineering at California State University, Fullerton.</p>
                    <div className={style.techStack}>
                        <h2>Tech Stack:</h2>
                        <p><span className={style.bold}>🌐 Languages:</span> C, C++, C#, HTML/CSS, Java, JavaScript, Python, R, SQL, x86 Assembly</p>
                        <p><span className={style.bold}>📚 Libraries:</span> React</p>
                        <p><span className={style.bold}>🧱 Frameworks:</span> React Native, Bootstrap, Tailwind CSS, ExpressJS</p>
                        <p><span className={style.bold}>🧰 Tools:</span> VS Code, Visual Studio IDE, Git, GitHub, Node.js, Vite, Android Studio, MySQL Workbench, Unity, Jupyter, Anaconda, Postman, Figma</p>
                    </div>
                </div>
            </div>
        </div>
    );
};