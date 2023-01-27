import ProjectCard from '../../components/ProjectCard';
import TextCard from '../../components/TextCard';
import projects from './projects';
import * as Styled from './styles';

export default function Projects() {
  return (
    <Styled.Container id="projects">
      <TextCard>Projetos</TextCard>
      <Styled.ProjectsContainer>
        {projects.map(({ imgSrc, mainURL, secondaryURL, title }) => (
          <ProjectCard
            imgSrc={imgSrc}
            mainURL={mainURL}
            secondaryURL={secondaryURL}
            title={title}
          />
        ))}
      </Styled.ProjectsContainer>
    </Styled.Container>
  );
}
