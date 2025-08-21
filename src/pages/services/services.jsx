import styles  from './services.module.css'
import { data } from './services'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faX  } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Services(){

    const [isActive, setIsActive] = useState('')

    const handleClick = (type) => {
        setIsActive(type)
    }

    let filter = isActive

    const [isVisible, setIsVisible] = useState('')

    const handleInfo = (name) => {
        setIsVisible(name)
    }

    return(
        <section className={styles.section}>
            <div className={styles.div_title}>
                <h1>Nuestros Servicios</h1>
                <p>Ofrecemos 20 tratamientos dentales especializados para cuidar tu sonrisa con la más alta tecnología y profesionalismo.</p>
                <div className={styles.div_filter}>
                    <button onClick={()=>{handleClick('')}} className={`${styles.btn_filter} ${isActive === '' ? styles.active : ''}`}>Todos</button>
                    <button onClick={()=>{handleClick('estetico')}} className={`${styles.btn_filter} ${isActive === 'estetico' ? styles.active : ''}`} >Estético</button>
                    <button onClick={()=>{handleClick('correctivo')}} className={`${styles.btn_filter} ${isActive === 'correctivo' ? styles.active : ''}`}>Correctivo</button>
                    <button onClick={()=>{handleClick('cirugia')}} className={`${styles.btn_filter} ${isActive === 'cirugia' ? styles.active : ''}`}>Cirugía</button>
                    <button onClick={()=>{handleClick('preventivo')}} className={`${styles.btn_filter} ${isActive === 'preventivo' ? styles.active : ''}`}>Preventivo</button>
                    <button onClick={()=>{handleClick('diagnostico')}} className={`${styles.btn_filter} ${isActive === 'diagnostico' ? styles.active : ''}`}>Diagnostico</button>
                </div>
            </div>
            <div className={styles.div_cards}>
                {data.filter(service => filter === '' || service.type === filter).map((service)=>(
                    <div key={service.name} className={`${styles.card} `}>
                        <h3>{service.name}</h3>
                        <p>{service.shortDescription}</p>
                        <button onClick={()=>{handleInfo(service.name)}} className={styles.btn}><span className={styles.btn_plus}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></span>Mas info</button>
                    </div>
                ))}
            </div>
            <div onClick={()=> setIsVisible('')} className={`${styles.card_info} ${isVisible === '' ? styles.displaynone : styles.displayblock}`}>
                {data.filter(service => service.name === isVisible).map((service) =>(
                    <div key={service.name} className={styles.div_card_info}>
                        <span onClick={()=>{setIsVisible('')}} className={styles.span_x} role='button'><FontAwesomeIcon icon={faX}></FontAwesomeIcon></span>
                        <h3>{service.name}</h3>
                        <p>{service.longDescription}</p>
                        <button>Agendar Ya</button>
                    </div>
                ))}
            </div>
        
        </section>
    );

}

export default Services