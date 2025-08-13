import styles from './date.module.css'

function Date(){
    return(
        <section className={styles.section}>
            <div className={styles.div}>
                <h1 className={styles.h1}>Programe su cita</h1>
                <p className={styles.p}>Crear tu cita desde nuestra página te ayuda a poder elegir el dia y la hora en la que puedes visitarnos.</p>
            </div>
            <form action="" className={styles.form}>
                <fieldset className={styles.fieldset}>
                    <legend>Datos personales</legend>

                    <label htmlFor="dateName">Nombre Completo</label>
                    <input type="text" />

                    <label htmlFor="dateMail">Correo Electrónico</label>
                    <input type="email" />

                    <label htmlFor="dateTel">Número de teléfono</label>
                    <input type="tel" />

                </fieldset>

                <fieldset className={styles.fieldset}>
                    <legend>Fecha</legend>
                    <input type="date" />
                </fieldset>
            </form>
        </section>
    );
    
}

export default Date