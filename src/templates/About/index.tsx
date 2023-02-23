import { HandPeace } from '@styled-icons/fa-solid';
import ImageCard from '../../components/ImageCard';
import TextCard from '../../components/TextCard';
import { theme } from '../../styles/theme';
import * as Styled from './styles';
import hero from '../../../public/assets/images/hero/hero.jpg';

export default function About() {
  return (
    <Styled.Container id="about">
      <ImageCard alt="Picture of Écio" className="slideInDown" src={hero} />
      <Styled.AboutContainer>
        <TextCard className="slideInRight">
          Olá! <HandPeace size={theme.font.sizes.xlarge} />
        </TextCard>
        <TextCard as="p" className="slideInRight" size="small">
          Me chamo Écio, sou de Recife, Pernambuco.
          <br />
          <br />
          Migrei para a tecnologia no início de 2021, pesquisando e estudando
          por conta própria através de cursos e tutoriais online. Após um
          competitivo processo seletivo, iniciei meus estudos na Trybe, escola
          de desenvolvimento web, onde pude me desenvolver com muito mais
          afinco.
          <br />
          <br />
          Esse é meu portfólio, e aqui você pode conferir os projetos e
          habilidades que tenho desenvolvido.
        </TextCard>
      </Styled.AboutContainer>
    </Styled.Container>
  );
}
