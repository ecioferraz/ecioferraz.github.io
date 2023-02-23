import { ReactNode } from 'react';

type TextCardProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: ReactNode;
  className?: string;
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'huge' | 'xhuge';
};

export default TextCardProps;
