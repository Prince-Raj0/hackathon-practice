import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Hover me</button>
    </div>
  );
};

export default NavBar;
