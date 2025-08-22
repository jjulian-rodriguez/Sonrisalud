import styles from "./footer.module.css"
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTiktok} from '@fortawesome/free-brands-svg-icons';
import { faClock,  faEnvelope, faLocationArrow, faPhone} from "@fortawesome/free-solid-svg-icons";


function Footer(){
    const Links = ({url, socialMedia, icono}) => {
      return(
    <a 
    href={`${url}`}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.link}
    >
      <FontAwesomeIcon icon={icono}></FontAwesomeIcon>
    {`${socialMedia}`} 
    </a>
      );
     
  }

  //Constante para los links del footer
  const FooterLinks = ({link}) =>{
    return(
      <li className={styles.li}>
        <Link className={styles.link_footer} to='/.'>{link}</Link>
      </li>
    )
  }

  return(
    <footer className={styles.footer}>
      <section className={styles.section}>    
          <div className={styles.socialmedia}>
            <h2 className={styles.h2}>Síguenos</h2>
              <Links icono={faInstagram} url={"www.instagram.com"} socialMedia={"Instagram"} />
              <Links icono={faFacebook} url={"www.instagram.com"} socialMedia={"Facebook"}/>
              <Links icono={faTiktok} url={"www.instagram.com"} socialMedia={"TikTok"}/>
          </div>
          <div className={styles.div_contact}>
            <h2 className={styles.h2}>Contacto</h2>
            <a className={styles.contact_link} href="#">
              <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon>
              Calle #45 Avenida Los Soles.
              </a>

            <a className={styles.contact_link} href="#">
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              (+506) 000-000
            </a>

            <a className={styles.contact_link} href="#">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              info@sonrisalud.com
            </a>

            <a className={styles.contact_link} href="#">
              <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
              Lun-Vie 9:00 AM - 6PM
            </a>
          </div>
      </section>
      <section className={styles.section_info}>
        
        <div className={styles.div_copyright}>
          <div className={styles.div_info}>
          <ul className={styles.ul}>
            <FooterLinks link={"FAQ"}/>
            <FooterLinks link={"Política de privacidad"}/>
            <FooterLinks link={"Términos y condiciones"}/>
            <FooterLinks link={"Contáctanos"}/>
            <FooterLinks link={"Política de cookies"}/>
          </ul>
        </div>
        <div className={styles.div_info}>
          <img src={logo} width={100} alt="" />
          <p className={styles.p}>Copyright Sonrisalud. Todos los derechos reservados.</p>
        </div>
        </div>
      </section>
        <div className={styles.bg}></div>      
    </footer>
  );
}

export default Footer
