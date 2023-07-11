import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { BodyP1, BodyS1, Container } from '../components/Common.styled';
import { InstIcon, TeleIcon, ViberIcon, VkIcon, WhatIcon } from '../components/icons';
import {
  CopyWrapper,
  CopyText,
  Left,
  Menu1,
  Menu2,
  Right,
  RightTitle,
  RightContacts,
  RightIcons,
  Wrapper,
} from './Footer.styled';
import { ReactComponent as LogoIcon } from '../app/images/logo.svg';

type FooterProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={className} {...props}>
      <Container>
        <Wrapper>
          <Left>
            <CopyWrapper>
              <LogoIcon />
              <CopyText>© «Интернет-магазин DogFood.ru»</CopyText>
            </CopyWrapper>
          </Left>
          <Menu1>
            <BodyS1 $weight={600}>Каталог</BodyS1>
            <BodyS1 $weight={600}>Акции</BodyS1>
            <BodyS1 $weight={600}>Новости</BodyS1>
            <BodyS1 $weight={600}>Отзывы</BodyS1>
          </Menu1>
          <Menu2>
            <BodyS1 $weight={600}>Оплата и доставка</BodyS1>
            <BodyS1 $weight={600}>Часто спрашивают</BodyS1>
            <BodyS1 $weight={600}>Обратная связь</BodyS1>
            <BodyS1 $weight={600}>Контакты</BodyS1>
          </Menu2>
          <Right>
            <RightTitle>Мы на связи</RightTitle>
            <RightContacts>
              <BodyP1 $weight={700}>8 (999) 00-00-00</BodyP1>
              <BodyS1>dogfood.ru@gmail.com</BodyS1>
            </RightContacts>
            <RightIcons>
              <InstIcon />
              <TeleIcon />
              <ViberIcon />
              <VkIcon />
              <WhatIcon />
            </RightIcons>
          </Right>
        </Wrapper>
      </Container>
    </footer>
  );
};

export default Footer;
