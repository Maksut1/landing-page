import { BsHandbagFill } from 'react-icons/bs'
import { TiArrowSortedDown } from 'react-icons/ti'


import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                <a href="/" className={styles.headerLogoLink}>
                    <h3>Panto</h3>
                </a>
            </div>
            <nav  className={styles.navbarCollapse}>
                    <ul className={styles.navbar}>
                        <li className={styles.navItem}>
                        <a className={styles.navLink} href="/">
                            Furniture
                        </a>
                        </li>
                        <li className={styles.navitem}>
                        <a className={styles.navLink} href="/">
                            Shop
                        </a>
                        </li>
                        <li className={styles.navitem}>
                        <a className={styles.navLink} href="/">
                            About Us
                        </a>
                        </li>
                        <li className={styles.navitem}>
                        <a className={styles.navLink} href="/">
                        Contact
                        </a>
                        </li>
                    </ul>
            </nav>
            <div className={styles.cartBasket}>
                <BsHandbagFill/> 
                <span className={styles.cartPrice}>0</span>
                </div>
        </header>
    </div>
  )
}

export default Header