import Link from 'next/link'
import styles from '../s'

const Footer = () => {
  return (
    <footer>
      <div className="contenedor">
          <nav className="">
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
          </nav>

          <p>Todos los derechos reservados</p>
          
      </div>
    </footer>
  )
}

export default Footer;