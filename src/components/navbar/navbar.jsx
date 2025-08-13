import { Link } from "react-router-dom";
import styles from "./navbar.module.css"
import {useState} from 'react'
import Logo from '../../assets/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage,faPhone} from "@fortawesome/free-solid-svg-icons";


function Navbar(){
    const [open, setOpen] = useState(false)

    function openNB(){
        setOpen(!open)
    }

    

    return(
        <nav className={`${styles.navbar}`}>
            <div className={styles.div}>
                <img src={Logo} alt="Logo Sonrisalud"  className={styles.logo} />
                <a className={styles.tel} href="tel:+50600000000"><FontAwesomeIcon icon={faPhone} ></FontAwesomeIcon>0000-0000</a>
                <a className={styles.cel} href="tel:+50600000000"><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon> 0000-0000</a>
            </div>
            <button className={styles.hamburger} onClick={openNB}> {open ? "✕" : "☰"}</button>
            <ul className={styles.navbar_ul}> 
                <li className={`${styles.navbar_li} ${open ? styles.displayblock : styles.displaynone}`}>
                    <Link className={`${styles.navbar_link} ${open ? styles.event : styles.nonevent}`} to="/about">Nosotros</Link>
                </li >
                <li className={`${styles.navbar_li} ${open ? styles.displayblock : styles.displaynone}`}>
                    <Link className={styles.navbar_link} to="/date">Agendá tu cita</Link>
                </li>
                <li className={`${styles.navbar_li} ${open ? styles.displayblock : styles.displaynone}`}>
                    <Link className={styles.navbar_link} to="">Contáctanos</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar