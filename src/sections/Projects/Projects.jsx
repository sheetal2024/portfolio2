import styles from './ProjectsStyles.module.css';
import snake from '../../assets/snake.png';
import nyra from '../../assets/nyra.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={snake}
          link="https://snakegamexyz.netlify.app/"
          h3="SnakeGame"
          p="Game"
        />
        <ProjectCard
          src={nyra}
          link="https://nyra.netlify.app/"
          h3="Nyra"
          p="AI Chatbot"
        />
      </div>
    </section>
  );
}

export default Projects;
