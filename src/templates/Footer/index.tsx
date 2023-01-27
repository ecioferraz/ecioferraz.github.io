import { Mail } from '@styled-icons/entypo';
import CustomLink from '../../components/CustomLink';
import TextCard from '../../components/TextCard';
import * as Styled from './styles';

export default function Footer() {
  return (
    <Styled.Container>
      <CustomLink src="mailto:ecioferraz@gmail.com">
        <Mail />
        <TextCard as="p" size="small">
          ecioferraz@gmail.com
        </TextCard>
      </CustomLink>
      <TextCard as="p" size="small">
        Criado com React, Styled Components e Vite.
      </TextCard>
    </Styled.Container>
  );
}
