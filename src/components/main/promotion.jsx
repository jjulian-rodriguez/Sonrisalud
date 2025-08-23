import styles from './promotion.module.css'
import Promotion1 from '../../assets/promotion/promotion-1.jpg';
import { Link } from 'react-router-dom'

function Promotion(){
    return(
        <section className={styles.promotion}>
            <article className={styles.article}>
                <div className={styles.text}>
                    <h1 className={styles.h1}>Sonríe con confianza, nosotros cuidamos de ti</h1>
                    <p className={styles.p}>En nuestra clínica dental, tu sonrisa es nuestra prioridad. Contamos con tecnología de última generación y un equipo de especialistas comprometidos con brindarte la mejor atención. Ya sea que necesites una limpieza, un blanqueamiento o un tratamiento más avanzado, estamos aquí para devolverte la confianza y mantener tu salud bucal en perfectas condiciones.</p>
                    <Link to='/date' className={styles.button}>¡Quiero empezar!</Link>
                </div>
                <img src={Promotion1} alt="" className={styles.img} />
            </article>
        </section>
    );
}

export default Promotion;