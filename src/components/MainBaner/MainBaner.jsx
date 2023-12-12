// import React from 'react';
import { Container } from "./MainBaner.js";
import { IconButton } from "../../utils/Container.jsx";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const MainBaner = () => {
  return (
    <Container>
      <h3>Marketing va</h3>
      <p>talabalar amaliyoti 2023</p>
      <Container.P>
        Marketing va talabalar amaliyoti bo‘limi
      </Container.P>
      <IconButton title={"Hisobga kirish"} icon={<HiOutlineArrowNarrowRight />} />
      <Container.BG />
    </Container>
  );
};

export default MainBaner;
