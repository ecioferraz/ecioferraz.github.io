import { Code } from '@styled-icons/entypo';
import CustomLink from '../CustomLink';
import ImageCard from '../ImageCard';
import TextCard from '../TextCard';
import ProjectCardProps from './ProjectCard.props';
import * as Styled from './styles';

export default function ProjectCard({
  imgSrc,
  mainURL,
  secondaryURL,
  title,
}: ProjectCardProps) {
  return (
    <Styled.Container title={title}>
      <CustomLink src={mainURL}>
        <ImageCard alt={`Imagem do projeto ${title}`} src={imgSrc} />
      </CustomLink>
      <Styled.ContainerBody>
        <TextCard as="h4" size="small">
          {title}
        </TextCard>
        <CustomLink src={secondaryURL}>
          <Code title='GitHub' />
        </CustomLink>
      </Styled.ContainerBody>
    </Styled.Container>
  );
}
