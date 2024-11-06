import React from "react";
import styles from "../styles/home.module.scss";

const Home = () => {
  const [users, setUsers] = React.useState([]);

  const getUsers = async () => {
    const response = await fetch('https://api.github.com/users');
    const users = await response.json();
    setUsers(users);
    console.log(users);
  };

  React.useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>github users</h3>
      <ul className={styles.cardList}>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id} className={styles.card}>
              <img src={avatar_url} alt={login} className={styles.cardImg} />
              <div className={styles.row}>
                <h4 className={styles.card}>{login}</h4>
                <a href={html_url} className={styles.link}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
