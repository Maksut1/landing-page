import React from 'react'

import styles from './Main.module.scss'

const Main = () => {
  return (
    <main className={styles.MainWrapper}>
            <h2 className={styles.chooseWrap}>WhyChoosing Us</h2>
            <ul className={styles.firstWrap}> 
                <li className={styles.MainText}>
                <h3>Luxury facilities</h3>
                <span>The advantage of hiring a workspace <br/> 
                with us is that givees you comfortable <br />
                service and all-around facilities.</span>
                <a className={styles.InfoWrap} href="/">
                More Info
                </a>
                </li>

                <li className={styles.MainText}>
                <h3>Affordable Price</h3>
                <span>You can get a workspace of the highst <br /> 
                quality at an affordable price and still <br />
                enjoy the facilities that are oly here.</span>
                <a className={styles.InfoWrap} href="/">
                More Info
                </a>
                </li>
                <li className={styles.MainText}>
                <h3>Many Choices</h3>
                <span>We provide many unique work space <br />
                choices so that you can choose the <br />
                workspace to your liking.</span>
                <a className={styles.InfoWrap} href="/">
                More Info
                </a>
                </li>
            </ul>
    </main>
)
}

export default Main