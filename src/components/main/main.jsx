import styles from './main.module.css'
import LogoCheck1 from '../../assets/logo-check-1.png'
import LogoCheck2 from '../../assets/logo-check-2.png'
import LogoCheck3 from '../../assets/logo-check-3.png'


function Main(){
    return(
    <section className={styles.section_info}>
        <div>
            <div className={styles.div_info}>
                <div className={styles.div_contain_info}>
                    <h2 className={styles.h2}>Sonrisas saludables, tratamientos personalizados. ¡Tu bienestar dental es nuestra prioridad!</h2>
                    <p className={styles.p}>En nuestra clínica, creemos que una sonrisa sana es sinónimo de calidad de vida. Por eso, diseñamos planes de tratamiento a tu medida, utilizando tecnología de vanguardia y un enfoque preventivo. Desde limpiezas hasta procedimientos especializados, nuestro equipo de odontólogos certificados te acompañará en cada paso para garantizar resultados duraderos y naturales. ¡Agenda tu cita hoy mismo!</p>
                </div>
                <img src={LogoCheck1} className={`${styles.img} img-fluid`} alt="" />
            </div>

            <div className={styles.div_info}>
                <img src={LogoCheck2} className={`${styles.img} img-fluid`} alt="" />
                <div className={styles.div_contain_info}>
                    <h2 className={styles.h2}>Expertos en cuidar de tu sonrisa con tecnología avanzada y calidez humana.</h2>
                    <p className={styles.p}>Combinamos lo mejor de la odontología moderna con un trato cercano y empático. En un ambiente relajado y esterilizado, ofrecemos desde blanqueamientos hasta implantes dentales, siempre con materiales de primera calidad. Nos apasiona verte sonreír con confianza, por eso nos actualizamos constantemente para brindarte soluciones innovadoras y sin dolor.</p>
                </div>
            </div>

            <div className={styles.div_info}>
                <div className={styles.div_contain_info}>
                    <h2 className={styles.h2}>Primera consulta gratuita. ¡Déjanos devolverte la confianza de una sonrisa perfecta!</h2>
                    <p className={styles.p}>¿Buscas un dentista de confianza? En tu primera visita, realizaremos un diagnóstico completo sin costo y te explicaremos las opciones disponibles para tu caso. Ya sea caries, ortodoncia o rehabilitación oral, trabajamos con transparencia y financiamiento flexible. Tu sonrisa merece lo mejor, y nosotros estamos aquí para hacerlo posible.</p>
                </div>
                <img src={LogoCheck3} className={`${styles.img} img-fluid`} alt="" />
            </div>
        </div>
    </section>
    );
}

export default Main