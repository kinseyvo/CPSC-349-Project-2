import React from "react";
import ProjectCard from "./ProjectCard";
import style from "../styles/projects.module.css";

const projects = [
    {
        id: 1,
        name: "Peg Game",
        description: "Project 1 Description",
        tools: "Python",
        githubLink: "https://github.com/kinseyvo/CPSC-481/tree/main/Final%20Project",
        image: "project1.jpeg"
    },
    {
        id: 2,
        name: "Popular Superhero TV Research",
        description: "Project 2 Description",
        tools: "Jupyter",
        githubLink: "https://github.com/kinseyvo/Popular-Superhero-TV-Research",
        image: "project2.jpeg"
    },
    {
        id: 3,
        name: "Tic-Tac-Toe",
        description: "Project 3 Description",
        tools: "React Native",
        githubLink: "https://github.com/kinseyvo/Tic-Tac-Toe",
        image: "project3.jpeg"
    },
    {
        id: 4,
        name: "Gymprentice",
        description: "Project 4 Description",
        tools: "React Native",
        githubLink: "https://github.com/kinseyvo/Gymprentice",
        image: "project4.jpeg"
    },
    {
        id: 5,
        name: "Quizzler",
        description: "Project 5 Description",
        tools: "HTML/CSS, Bootstrap",
        githubLink: "https://github.com/kinseyvo/CPSC-349-Project-1",
        image: "project5.jpeg"
    },
    {
        id: 6,
        name: "Cardio Man",
        description: "Project 6 Description",
        tools: "C#, Unity",
        githubLink: "https://github.com/kinseyvo/Cardio-Man",
        image: "project6.jpeg"
    }
];

export default function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <div className={style.projectGrid}>
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};


// TODO
// Get an image for each project
// Add all languages and maybe tools used
// Make simple project description
// make the project cards interactable
    // if card is clicked, a modal/popup appears in the middle of the screen showing more details about the project
        // extra details would be languages and tools used

// add more specific todos if needed


// Basic TODOS
// Animation (fade in, similar to "About" page)
// Responsiveness (media queries)