import React from "react";
import styles from "../styles/form.module.scss"
import { Link } from "react-router-dom";

const Registration = () => {
  const [data, setData] = React.useState({
    mail: "",
    password: "",
  })
  return (
    <div className={styles.modalWrapper}>
      <form className={styles.modal}>
        <h1 className={styles.title}>Регистрация</h1>
        <div className={styles.inputWrapper}>
          <input 
            id="name"
            name="name"
            className={styles.input} 
            placeholder="ФИО" 
            type="text" 
            onChange={text => setData({...text, name: text.target.value})}
          />
        </div>
        <div className={styles.inputWrapper}>
          <input 
            id="mail"
            name="mail"
            className={styles.input} 
            placeholder="Эл. почта" 
            type="text" 
            onChange={text => setData({...text, mail: text.target.value})}
          />
        </div>
        <div className={styles.inputWrapper}>
          <input 
            id="password"
            name="password"
            className={styles.input} 
            placeholder="Пароль" 
            type="password" 
            onChange={text => setData({...text, password: text.target.value})}
          />
        </div>
        <button className={styles.button}>Зарегистрироваться</button>
        <p className="description">Есть аккаунт? <Link to="/">Войти</Link></p>
      </form>
    </div>
  )
};

export default Registration;
