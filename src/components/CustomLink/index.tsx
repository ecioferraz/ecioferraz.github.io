import CustomLinkProps from './CustomLink.props';
import * as Styled from './styles';

export default function CustomLink({ children, src }: CustomLinkProps) {
  return (
    <Styled.Container href={src} target="_blank">
      {children}
    </Styled.Container>
  );
}
