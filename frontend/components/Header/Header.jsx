import Logo from "../Logo";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
};

export default Header;
