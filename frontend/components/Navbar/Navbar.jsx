import styles from "./Navbar.module.scss";
import MOCK from "./menuData";

const Navbar = () => {
  return (
    <ul className={styles.navbar}>
      {MOCK.map(({ href, title, key }) => (
        <li key={key}>
          <a className={styles.link} href={href}>
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
