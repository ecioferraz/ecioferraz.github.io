import ImageCardProps from './ImageCard.props';
import * as Styled from './styles';

export default function ImageCard({ alt, src }: ImageCardProps) {
  return <Styled.Container alt={alt} src={src} />;
}
