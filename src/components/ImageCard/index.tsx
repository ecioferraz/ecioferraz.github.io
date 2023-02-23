import ImageCardProps from './ImageCard.props';
import * as Styled from './styles';

export default function ImageCard({ alt, className, src }: ImageCardProps) {
  return <Styled.Container alt={alt} className={className} src={src} />;
}
