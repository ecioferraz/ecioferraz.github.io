import { Github, Linkedin } from '@styled-icons/boxicons-logos';
import CustomLink from '../../components/CustomLink';
import NavLink from '../../components/NavLink';
import * as Styled from './styles';

export default function Header() {
  return (
    <Styled.Container>
      <Styled.NavContainer>
        <ul>
          <NavLink src="#about">Quem sou eu</NavLink>
          <NavLink src="#skills">Habilidades</NavLink>
          <NavLink src="#projects">Projetos</NavLink>
        </ul>
      </Styled.NavContainer>
      <Styled.ContactContainer>
        <CustomLink src="https://github.com/ecioferraz">
          <Github />
        </CustomLink>
        <CustomLink src="https://www.linkedin.com/in/ecioferraz/">
          <Linkedin />
        </CustomLink>
      </Styled.ContactContainer>
    </Styled.Container>
  );
}
