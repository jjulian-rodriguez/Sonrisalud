import { useEffect, useState } from 'react';
import styles from './date.module.css'

function Dates(){
    

    const generateDates = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const newDate = new Date(today);
      newDate.setDate(today.getDate() + i);
      days.push(newDate.toISOString().split("T")[0]); // formato YYYY-MM-DD
    }
    return days;
  };

  const availableDates = generateDates();

  const Days = ()=>{
    return availableDates.map((day, index) => (
        <option value="" key={index}>{day}</option>
    ))
  }

    const Times = [
        '8:00 A.M',
        '9:00 A.M',
        '10:00 A.M',
        '11:00 A.M',
        '1:30 P.M',
        '2:30 P.M',
        '3:30 P.M',
        '4:30 P.M',
        '5:30 P.M',
    ]
    
    const Hour = () => {
        return Times.map((time, index) => (
            <option key={index} value={time}>
            {time}
            </option>
        ));
};

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
                    <label htmlFor="day">Día</label>
                    <select name="day" id="day">
                        <Days></Days>
                    </select>

                    <label htmlFor="hour">Hora</label>
                    <select name="hour" id="hour">
                        <Hour/>
                    </select>
                </fieldset>
            </form>
        </section>
    );
    
}

export default Dates