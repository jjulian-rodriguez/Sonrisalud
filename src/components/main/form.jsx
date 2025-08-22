import styles from './form.module.css'
import {useState, useEffect} from 'react'
import Arrow from '../../assets/promotion/arrow.png'

export default function Form(){

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


    return(
        <div className={styles.div_container_form}>
          <div className={styles.div}>
          <h2 className={styles.h2}>¿Tienes alguna pregunta o duda?</h2>
            <p className={styles.p}>Envíanos un mensaje y te estaremos respondiendo lo mas pronto.</p>
            <img className={styles.arrow} src={Arrow} alt="" />
          </div>
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

            <button className={styles.button} disabled={disabled}>Enviar</button>
          </form>
        </div>
    )
}