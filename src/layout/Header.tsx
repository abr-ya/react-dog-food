import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ReactComponent as LogoIcon } from '../app/images/logo.svg';
import { Container } from '../components/Common.styled';
import { Search } from '../components';
import { Center, Left, Right, Wrapper } from './Header.styled';
// import { Link } from 'react-router-dom';

type HeaderProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={className} {...props}>
      <Container>
        <Wrapper>
          <Left>
            <LogoIcon />
          </Left>
          <Center>
            <Search />
          </Center>
          <Right>icons</Right>
        </Wrapper>
      </Container>
      {/* <Link to='/'>Home</Link>
      <Link to='/food'>Food</Link> */}
    </header>
  );
};

export default Header;
