
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {rec} from '../assets/Rectangle.svg'

export default function Home() {
  return (
    <div className={styles.container}>    
    <div className={styles.header}> <h1 className={styles.section_title}>hello head</h1></div>
    <div className={styles.body}>
      <div className={styles.menu}>
        <h1 className={styles.section_title}>NFTs</h1>
        <div className={styles.menu_content}>
        <div className={styles.icon_container}>
          <ul className={styles.icons}>
            <li className={styles.icon}>an</li>
            <li className={styles.icon}>in</li>
            <li className={styles.icon}>on</li>
          </ul>
        </div>
        {/* <div className={styles.svg_rec}></div> */}
          
          
        </div>
        
      </div>
      <div className={styles.main}><h1 className={styles.section_title}>hello main</h1> </div>
      <div className={styles.sidebar}><h1 className={styles.section_title}>hello side</h1> </div>
    </div>
    <div className={styles.footer}><h1 className={styles.section_title}>hello side</h1></div>
  </div>
  )
}
