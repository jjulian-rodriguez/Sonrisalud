import styles from "./footer.module.css"
import { useState, useEffect } from 'react'

const InstagramLink = ({ username }) => (
  <a 
    href={`https://www.instagram.com/${username}/`}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.link}
  >
    {`Síguenos en Instagram (@${username})`}
  </a>
);

const FacebookLink = ({ username }) => (
  <a 
    href={`https://www.facebook.com/${username}/`}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.link}
  >
    {`Síguenos en Facebook (@${username})`}
  </a>
);

const TiktokLink = ({ username }) => (
  <a 
    href={`https://www.tiktok.com/${username}/`}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.link}
  >
    {`Síguenos en TikTok (@${username})`}
  </a>
);

function Footer(){
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [tel, setTel] = useState(""); 

  const [formAlert, setFormAlert] = useState({
    nameA: '',
    mailA: '',
    telA: ''
  });

  const [check, setCheck] = useState({
    nameC: false,
    mailC: false,
    telC: false 
  });

  const [disabled, setDisabled] = useState(true);

  function submit(e) {
    e.preventDefault();
    VerifiedName();
    VerifiedMail();
    VerifiedTel();

    if (!check.nameC || !check.mailC || !check.telC) return;

    setName('');
    setMail('');
    setTel('');
    alert('Haz enviado el formulario correctamente.');
  }

  function VerifiedName(){
    if(!name.trim()){
      setFormAlert(prev => ({...prev, nameA: 'El nombre es obligatorio*'}))
      setCheck(prev => ({...prev, nameC: false}))
    }
    else if(name.length < 3){
      setFormAlert(prev => ({...prev, nameA: 'La longitud mínima es de 3 caracteres*'}))
      setCheck(prev => ({...prev, nameC: false}))
    } 
    else {
      setFormAlert(prev => ({...prev, nameA: ''}))
      setCheck(prev => ({...prev, nameC: true}))
    }
  }

  function VerifiedMail(){
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)){
      setFormAlert(prev => ({...prev, mailA: ''}))
      setCheck(prev => ({...prev, mailC: true}))
    }
    else if(!mail.trim()){
      setFormAlert(prev => ({...prev, mailA: 'El email es obligatorio*'}))
      setCheck(prev => ({...prev, mailC: false}))
    }
    else {
      setFormAlert(prev => ({...prev, mailA: `Por favor use el patrón correcto '@' y '.'`}))
      setCheck(prev => ({...prev, mailC: false}))
    }
  }

  function VerifiedTel(){
    if(!tel.trim()){
      setFormAlert(prev => ({...prev, telA: 'El teléfono es obligatorio*'}))
      setCheck(prev => ({...prev, telC: false}))
    }
    else if(/^[A-Za-z]+$/.test(tel)){
      setFormAlert(prev => ({...prev, telA: 'Por favor use solo números en el teléfono*'}))
      setCheck(prev => ({...prev, telC: false}))
    }
    else {
      setCheck(prev => ({...prev, telC: true}))
      setFormAlert(prev => ({...prev, telA: ''}))
    }
  }

  useEffect(() => {
    setDisabled(!(check.nameC && check.mailC && check.telC));
  }, [check]);

  const [faqOpen, setFaqOpen] = useState({
    Q1: false,
    Q2: false,
    Q3: false,
    Q4: false
  });

  function toggleFAQ(key){
    setFaqOpen(prev => ({...prev, [key]: !prev[key]}));
  }

  return(
    <footer className={styles.footer}>
      <section className={styles.section}>          
        <div className={styles.div_socialMedia}>
          <h2 className={styles.h2}>Síguenos</h2>
          <InstagramLink username="sonrisalud"/>
          <FacebookLink username="sonrisalud"/>
          <TiktokLink username="sonrisalud"/>
        </div>

        <div className={styles.frequentily}>
          <h2 className={styles.h2}>Preguntas frecuentes</h2>

          <div className={styles.questions}>
            <span onClick={() => toggleFAQ("Q1")}>¿Dónde están ubicados?</span>
            <div className={`${styles.response} ${faqOpen.Q1 ? styles.displayblock : styles.displaynone}`}>
              <p>Contamos con tres clínicas dentales estratégicamente ubicadas para tu comodidad:
                <br />
               - San José Centro: Avenida Central, Calle 5, frente al Parque Central. Edificio Dental Smile, segundo piso.
                <br />
               - San José, Escazú: Plaza Tempo, local #12, 200 metros oeste del AyA.
                <br />
               - Alajuela Centro: De la Catedral 300 metros norte, contiguo a la Farmacia La Luz.
                <br />
                Todos nuestros locales tienen horario de lunes a sábado y cuentan con estacionamiento gratuito. ¡Te esperamos!
              </p>
            </div>
          </div>

          <div className={styles.questions}>
            <span onClick={() => toggleFAQ("Q2")}>¿Qué servicios ofrecen?</span>
            <div className={`${styles.response} ${faqOpen.Q2 ? styles.displayblock : styles.displaynone}`}>
              <p>Ofrecemos tratamientos dentales integrales, desde limpiezas y empastes hasta ortodoncia, implantes y estética dental (blanqueamiento, carillas). Atendemos a adultos y niños con servicios preventivos, restaurativos y especializados, siempre con tecnología moderna y profesionales calificados.</p>
            </div>
          </div>

          <div className={styles.questions}>
            <span onClick={() => toggleFAQ("Q3")}>¿Cuál es el costo de una consulta/tratamiento?</span>
            <div className={`${styles.response} ${faqOpen.Q3 ? styles.displayblock : styles.displaynone}`}>
              <p>Los precios varían según el procedimiento. La consulta inicial tiene un costo fijo accesible, mientras que tratamientos como implantes u ortodoncia requieren evaluación para un presupuesto personalizado. Ofrecemos financiamiento y planes de pago para mayor flexibilidad.</p>
            </div>
          </div>

          <div className={styles.questions}>
            <span onClick={() => toggleFAQ("Q4")}>¿Aceptan mi seguro dental?</span>
            <div className={`${styles.response} ${faqOpen.Q4 ? styles.displayblock : styles.displaynone}`}>
              <p>Trabajamos con varias aseguradoras. Confirma con nuestro equipo si tu póliza aplica. Si no estamos en tu red, te ayudamos con facturas para reembolso. También tenemos opciones de pago en efectivo con descuento y facilidades de financiamiento.</p>
            </div>
          </div>
        </div>

        <div className={styles.div_container_form}>
          <form onSubmit={submit} noValidate className={styles.form}>
            <div className={styles.div_form}>
              <label className={styles.label}  htmlFor="name">Nombre completo <sup>*</sup></label>
              <input className={styles.input} type="text" id="name" name="name" required value={name} onBlur={VerifiedName} onChange={(e)=> setName(e.target.value)}  />
              <small>{formAlert.nameA}</small>
            </div>

            <div className={styles.div_form}>
              <label className={styles.label}  htmlFor="mail">Correo <sup>*</sup></label>
              <input className={styles.input}  type="email" id="mail" name="mail" required value={mail} onBlur={VerifiedMail} onChange={(e)=> setMail(e.target.value)} />
              <small>{formAlert.mailA}</small>
            </div>

            <div className={styles.div_form}>
              <label className={styles.label} htmlFor="tel">Teléfono <sup>*</sup></label>
              <input className={styles.input}  type="tel" id="tel" name="tel" onBlur={VerifiedTel} pattern="[0-9]{8}" required value={tel} onChange={(e)=> setTel(e.target.value)}/>
              <small>{formAlert.telA}</small>
            </div>

            <div className={styles.div_form}> 
              <label className={styles.label}  htmlFor="message">Mensaje <span className={styles.opcional}>(Opcional)</span></label>
              <textarea className={styles.textarea} name="message" id="message" placeholder="Escribe tu pregunta, duda o lo que quieras saber aquí."></textarea>
            </div>

            <button disabled={disabled}>Enviar</button>
          </form>
        </div>
      </section>
      <p className={styles.p}>Copyright Sonrisalud. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer
