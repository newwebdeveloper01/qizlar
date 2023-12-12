import React from 'react';
import { Container } from './Header.js';
import LOGO from '../../assets/logo.png';
import { IconButton } from '../../utils/Container';

const Header = () => {
  return (
    <>
      <Container className='d-flex align-items-center'>
        <Container.Img src={LOGO} />
        <Container.Many>
          <ul className='d-flex'>
            <li><a href='#'>Asosiy</a></li>
            <li><a href='#jamoa'>Bizning jamoa</a></li>
            <li><a href='#yangilik'>Yangiliklar</a></li>
            <li><a href='#'>Statistika</a></li>
            <li><a href='#vazifa'>Vazifalar</a></li>
          </ul>
          <IconButton title={"Login"} link={"/login"} />
        </Container.Many>
      </Container>
    </>
  );
};

export default Header;
