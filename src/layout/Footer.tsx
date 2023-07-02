import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Container } from '../components/Common.styled';
import { Left, Menu1, Menu2, Right, Wrapper } from './Footer.styled';

type FooterProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={className} {...props}>
      <Container>
        <Wrapper>
          <Left>111</Left>
          <Menu1>222</Menu1>
          <Menu2>333</Menu2>
          <Right>444</Right>
        </Wrapper>
      </Container>
    </footer>
  );
};

export default Footer;
