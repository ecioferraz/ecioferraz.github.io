import SkillsContainer from '../../components/SkillCard';
import TextCard from '../../components/TextCard';
import skills from './skills';
import * as Styled from './styles';

export default function Skills() {
  return (
    <Styled.Container id="skills">
      <TextCard>Habilidades</TextCard>
      <Styled.SkillsContainer>
        {skills.map(({ icon, title }) => (
          <SkillsContainer icon={icon} key={title} title={title} />
        ))}
      </Styled.SkillsContainer>
    </Styled.Container>
  );
}
