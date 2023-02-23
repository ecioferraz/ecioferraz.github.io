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
          Me chamo Écio, sou de Recife, Pernambuco. Sempre fui curioso e gostei
          de procurar soluções para os problemas que me apareciam com
          tecnologia, então decidi me tornar desenvolvedor web através da Trybe.
          Esse é meu portfólio, e aqui você pode conferir os projetos e
          habilidades que tenho desenvolvido.
        </TextCard>
      </Styled.AboutContainer>
    </Styled.Container>
  );
}
