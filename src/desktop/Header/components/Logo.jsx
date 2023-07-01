import React from 'react';
import styles from './../scss/Header.module.css';
import logoSvg from './../../../assets/icons/logo.svg';

export default function Logo() {
  return (
    <a href='/' className={styles.logo}>
      <LogoSvg/>

      <LogoText>
        <h1 className={styles.title}>MisMaksab</h1>
        <h6 className={styles.subTitle}>скидки в магазинах Эстонии</h6>
      </LogoText>
    </a>
  )
}

function LogoText({children}) {
  return (
    <div className={styles.logoText}>
      {children}
    </div>
  )
}

function LogoSvg() {
  return (
    <div>
      <img src={logoSvg} alt='logo'/>
    </div>
  )
}
