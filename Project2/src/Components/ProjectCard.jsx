import React from "react";
import { FaGithub } from "react-icons/fa6";
import style from "../styles/projectcard.module.css";

export default function ProjectCard({ project }) {
    return (
        <div className={style.projectCard}>
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.tools}</p>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={style.githubLink}><FaGithub className={style.githubIcon} /></a>
        </div>
    );
};