"use client"
import Logo from "@/components/atoms/Logo/Logo";
import styles from './Header.module.css';

const Header = () => {
  return(
    <header className={styles.header}>
      <Logo></Logo>
      <p>Whispers.❤️️</p>
    </header>
  )
}

export default Header
