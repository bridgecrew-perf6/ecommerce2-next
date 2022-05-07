import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenedor}`}>
          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
          </nav>

          <p className={styles.copyright}>Todos los derechos son reservados</p>
          
          <ul>
            <li className={styles.list}>
              <Link href="/https://www.instagram.com/?hl=es-la" className={styles.iconoInsta}></Link>
              <Link href="/" className={styles.iconoFace}></Link>
              <Link href="/" className={styles.iconoWhats}></Link>
              <Link href="/" className={styles.iconoLinke}></Link>
            </li>
          </ul>
          
      </div>
    </footer>
  )
}

export default Footer;
