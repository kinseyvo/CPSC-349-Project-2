import React from "react";
import { FaGithub } from "react-icons/fa6";
import style from "../styles/projectcard.module.css";

export default function ProjectCard({ project, openModal }) {
    const handleClick = () => {
        openModal(project);
    };

    // Stops modal from popping up whenever the GitHub icon is clicked
    const handleGitHubClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div className={style.projectCard} onClick={handleClick}>
            {/* <img src={project.image} alt={project.name} /> */}
            <h3>
                {project.name} <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={style.githubLink} onClick={handleGitHubClick}>
                    <FaGithub className={style.githubIcon} /></a>
            </h3>
            <p>{project.description}</p>
            <p>
                <i> {project.tools}</i>
            </p>
        </div>
    );
};