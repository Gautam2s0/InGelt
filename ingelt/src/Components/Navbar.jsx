import { Heading, Image } from '@chakra-ui/react'
import React from 'react';
import style from "../Styles/Navbar.css";
import logo from "../images/Logo.png"

export const Navbar = () => {
  return (
    <nav id="nav">
        <img id="logo" src={logo} alt="InGelt" />
    </nav>
  )
}
