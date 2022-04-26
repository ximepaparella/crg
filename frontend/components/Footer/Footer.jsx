import Image from "next/image";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="col-6">
        <Image
          width="62"
          height="29"
          src="/crg-chico.png"
          alt="Universidad de Ciencias Exactas de la Ciudad de Buenos Aires"
        />
      </div>
      <div className="col-6">
        <a href="">
          <Image
            width="180"
            height="28"
            src="/exactas-chico.png"
            alt="Centro de Recursos Genético"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
