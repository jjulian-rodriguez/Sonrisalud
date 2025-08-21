import { Link } from 'react-router-dom';
import styles from './services.module.css';
import EsteticaDental from '../../assets/services/estetica-dental.jpg'
import Ortodoncia from '../../assets/services/ortodoncia.jpg';
import BlanqueamientoDental from '../../assets/services/blanqueamiento-dental.jpg';
import Ortodonpediatria from '../../assets/services/ortodonpediatria.jpg';
import ImplantesDentales from '../../assets/services/implantes-dentales.jpg';
import LimpiezaDental from '../../assets/services/limpieza-dental.jpg';

function Services(){

    const Services = ({image, service, description}) => {
        return(
        <article className={styles.card_service}>
            <div className={styles.background} style={{backgroundImage: `url(${image})`}}></div>
            <div className={styles.div_info_service}>
                <h3 className={styles.h3}>{service}</h3>
                <p className={styles.p}>{description}</p>
                <Link to={`/services`} className={styles.link}>Conocer más</Link>
            </div>
        </article>
        );
    }

    return(
        <section className={styles.section_services}>
                <div className={styles.div_services}>
                    <h2 className={styles.h2}>Nuestros servicios mas solicitados!</h2>
                    <div className={styles.div_contain_service}>
                        <Services service={'Estetica Dental'} image={EsteticaDental} description={'Realzamos la belleza de tu sonrisa mediante tratamientos personalizados, corrigiendo imperfecciones y mejorando la forma, color y armonía de tus dientes para lograr resultados naturales.'} />
                        <Services  service={'Ortodoncia'} image={Ortodoncia} description={'Corrige la posición de tus dientes y mejora la mordida con tratamientos modernos y efectivos. Trabajamos con diferentes tipos de brackets y alineadores para brindarte la mejor opción según tus necesidades.'} />
                        <Services  service={'Blanqueamiento Dental'} image={BlanqueamientoDental} description={'Devuélvele el brillo a tu sonrisa con nuestro tratamiento de blanqueamiento profesional. Eliminamos manchas y aclaramos varios tonos de forma segura y rápida.'} />
                        <Services  service={'Ortodonpediatría'} image={Ortodonpediatria} description={'Cuidamos la salud bucal de los más pequeños con un enfoque amigable y divertido, asegurando que cada visita sea cómoda y educativa para crear hábitos saludables desde temprana edad.'} />
                        <Services service={'Implantes Dentales'} image={ImplantesDentales} description={'Recupera la función y estética de tu sonrisa con implantes de alta calidad. Son una solución duradera y segura para reemplazar dientes perdidos, devolviéndote la confianza al sonreír.'} />
                        <Services  service={'Limpieza Dental'} image={LimpiezaDental} description={'Elimina la placa, el sarro y las manchas superficiales con nuestras limpiezas dentales profesionales. Ayudamos a prevenir enfermedades y mantener tus dientes y encías saludables.'} />
                    </div>
                </div>
        </section>
    )
}

export default Services;