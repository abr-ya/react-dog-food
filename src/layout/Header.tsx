import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ReactComponent as LogoIcon } from '../app/images/logo.svg';
import { Container } from '../components/Common.styled';
import { Search } from '../components';
import { Center, Left, Right, Wrapper } from './Header.styled';
import { CartIcon, LikeIcon, DogIcon } from '../components/icons';

import { Link } from 'react-router-dom';

type HeaderProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={className} {...props}>
      <Container>
        <Wrapper>
          <Left>
            <Link to='/'>
              <LogoIcon />
            </Link>
          </Left>
          <Center>
            <Search />
          </Center>
          <Right>
            <LikeIcon />
            <Link to='/search'>
              <CartIcon />
            </Link>
            <Link to='/user'>
              <DogIcon />
            </Link>
          </Right>
        </Wrapper>
      </Container>
    </header>
  );
};

export default Header;
