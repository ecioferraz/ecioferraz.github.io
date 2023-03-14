import { ReactNode } from 'react';
import TextCard from '../TextCard';
import * as Styled from './styles';

export default function SkillCard({
  icon,
  title,
}: {
  icon: ReactNode;
  title: string;
}) {
  return (
    <Styled.Container aria-label={title}>
      {icon}
      <TextCard as="p" size="small">
        {title}
      </TextCard>
    </Styled.Container>
  );
}
