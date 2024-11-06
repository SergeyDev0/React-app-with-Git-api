import React from "react";
import styles from "../styles/form.module.scss"
import { Link } from "react-router-dom";

const Auth = () => {
  const [data, setData] = React.useState({
    mail: "",
    password: "",
  })

  return (
    <div className={styles.modalWrapper}>
      <form className={styles.modal}>
        <h1 className={styles.title}>Авторизация</h1>
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
        <button className={styles.button}>Войти</button>
        <p className="description">Нет аккаунта? <Link to="/reg">Зарегистрироваться</Link></p>
        </form>
    </div>
  )
};

export default Auth;
