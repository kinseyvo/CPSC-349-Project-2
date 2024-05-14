import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import Modal from "./Modal";
import style from "../styles/projects.module.css";

// Array of Objects
const projects = [
    {
        id: 1,
        name: "Peg Game",
        description: "A game that employs AI search algorithms for gameplay.",
        long_descrip: "Collaborated in a team to develop this game using AI search algorithms. Peg Game is most commonly played on a triangular board that contains 15 holes and 14 pegs. The 14 pegs can be placed in any order on the board. The initial state would be 14 pegs placed into the holes, with one hole remaining empty. The goal state is when only one peg is left remaining on the board, in any hole.",
        tools: "Python",
        githubLink: "https://github.com/kinseyvo/CPSC-481/tree/main/Final%20Project",
        image: "project1.jpeg"
    },
    {
        id: 2,
        name: "Popular Superhero TV Research",
        description: "The influence of genre types on the popularity of superhero shows.",
        long_descrip: "Utilizing data found online, I wanted to analyze Superhero TV shows and see which ones are more popular or in-demand than others. Additionally, I was looking to find if the type of genre has a factor in how popular a Superhero show is.",
        tools: "Python | Jupyter Notebook",
        githubLink: "https://github.com/kinseyvo/Popular-Superhero-TV-Research",
        image: "project2.jpeg"
    },
    {
        id: 3,
        name: "Tic-Tac-Toe",
        description: "An app that lets users play Tic-Tac-Toe with some twists!",
        long_descrip: "A two-player pass-the-phone version of Tic-Tac-Toe. Players can play the basic game or add in twists such as sound, undo turn or speed mode!",
        tools: "React Native | Node.js | Android Studio",
        githubLink: "https://github.com/kinseyvo/Tic-Tac-Toe",
        image: "project3.jpeg"
    },
    {
        id: 4,
        name: "Gymprentice",
        description: "An app that lets users find gyms to workout, learn exercises, and more!",
        long_descrip: "For gym rats, new and old. The only hard part of going to the gym is actually going to the gym. Find nearby gyms to workout. You can make your own workout schedule. Explore different types of strength, core, and cardio exercises. Don’t put off until tomorrow what can be done today!",
        tools: "React Native | Node.js | Android Studio | Google Cloud Platform",
        githubLink: "https://github.com/kinseyvo/Gymprentice",
        image: "project4.jpeg"
    },
    {
        id: 5,
        name: "Quizzler",
        description: "Register and take some fun and random quizzes!",
        long_descrip: "Collaborated in a team to make an interactive quiz web application. Users can create an account and take randomized quizzes. There is error handling for the login and account creation process. User account info is stored using a JSON array and local storage.",
        tools: "HTML/CSS | JavaScript | Bootstrap",
        githubLink: "https://github.com/kinseyvo/CPSC-349-Project-1",
        image: "project5.jpeg"
    },
    {
        id: 6,
        name: "Cardio Man",
        description: "A 2D platformer game with high risk and high reward!",
        long_descrip: "A character running across different screens collecting items and dodging dangerous objects. One level will involve an encounter with the big bad boss. Users can choose their character instead of playing the default skin. Each level has a different background to give players a new and different environment. Several levels offer branch timelines, meaning players can choose different pathways to play. Additionally, progression through levels is done by collecting flags. Scores are displayed with the online leaderboard. As levels progress, more obstacles, such as coins, spikes and blades, and collectibles will appear.",
        tools: "C# | Unity",
        githubLink: "https://github.com/kinseyvo/Cardio-Man",
        image: "project6.jpeg"
    }
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setIsModalOpen(false);
    };

    // Animation Effect
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={isVisible ? style.fadeIn : ""}>
            <h1>Projects 💼</h1>
            <div className={style.projectGrid}>
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} openModal={openModal} />
                ))}
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                {selectedProject && (
                    <div>
                        <h2>{selectedProject.name}</h2>
                        <p>{selectedProject.long_descrip}</p>
                        <p>Developed with: {selectedProject.tools}</p>
                    </div>
                )}
            </Modal>
        </div>
    );
};