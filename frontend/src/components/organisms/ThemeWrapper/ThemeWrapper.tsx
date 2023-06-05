"use client"

import styles from './ThemeWrapper.module.css'
import useTheme from "@/utils/useTheme";

const ThemeWrapper: React.FC = ({ children }) => {

  const { getTheme, toggleTheme } = useTheme()

  return (
    <div className={`${getTheme()} ${styles.themeWrapper}`}>
      {children}
    </div>
  )
}

export default ThemeWrapper
