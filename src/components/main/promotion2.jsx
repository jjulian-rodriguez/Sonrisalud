import styles from './promotion2.module.css'
import promotion2 from '../../assets/promotion/promotion-2.jpg';
import promotion22 from '../../assets/promotion/promotion-2-2.jpg';

function Promotion2(){
    return(
        <section className={styles.promotion}>
            <article className={styles.article}>
                <div className={styles.images}>   
                    <img src={promotion2} alt="" className={styles.img1} />
                    <img src={promotion22} alt="" className={styles.img2} />
                </div>
                <div className={styles.text}>
                    <h1 className={styles.h1}>Tratamientos dentales de calidad para toda la familia</h1>
                    <p className={styles.p}>Sabemos lo importante que es tu salud y la de quienes más quieres. Por eso, ofrecemos una amplia variedad de servicios dentales pensados para cada etapa de la vida, desde los más pequeños hasta los adultos. Nuestra misión es ofrecerte un trato personalizado, cómodo y seguro para que disfrutes de una sonrisa sana durante todo el año.</p>
                    <button className={styles.button}>Conoce más<script type="module" src=""></script></button>
                </div>
            </article>
        </section>
    );
}

export default Promotion2;