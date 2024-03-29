import NavLinkProps from './NavLink.props';
import * as Styled from './styles';

export default function NavLink({ children, src }: NavLinkProps) {
  return (
    <Styled.Container>
      <Styled.LinkContainer href={src} target="_self">
        {children}
      </Styled.LinkContainer>
    </Styled.Container>
  );
}
