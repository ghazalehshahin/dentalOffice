import React from 'react';

import { ReactComponent as Logo } from '../../assets/dental-clinic.svg';
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
  } from './header.styles';

import './header.styles.scss';



export const Header = ({hidden}) =>(
    <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink className='covid' to='/covid'>کرونا ویروس</OptionLink>
      <OptionLink to='/reserve'>رزرو نوبت</OptionLink>
      <OptionLink to='/contact'>تماس با ما</OptionLink>
      <OptionLink to='/about'>درباره ی پزشک</OptionLink>
      <OptionLink to='/protocols'>سخن پزشک با بیماران</OptionLink>
      <OptionLink to='/services'>لیست خدمات</OptionLink>
    </OptionsContainer>
  
  </HeaderContainer>
);
