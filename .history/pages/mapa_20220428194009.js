import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../styles/Mapa.module.css';

const Mapa = () => {
  return (
    <Layout
      pagina='Mapa'
    >
      <main className="contenedor">
        <h2 className="heading">Formulario</h2>
        <p className="text-2xl my-10">Llena el siguiente formulario para continuar con tu pedido</p>
        <form>
          <div className={styles.contenido}>
            <label
              className="block uppercase text-slate-800 font-bold text-xl"
              htmlFor="nombre"
            >Nombre(s) </label>

            <input 
              type="text"
              id="nombre"
              className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            />

            <label
              className="block uppercase text-slate-800 font-bold text-xl"
              htmlFor="apellido"
            >Apellido(s) </label>

            <input 
              type="text"
              id="apellido"
              className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            />

            <label
              className="block uppercase text-slate-800 font-bold text-xl"
              htmlFor="email"
            >Email </label>

            <input 
              type="text"
              id="email"
              className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            />

            <label
              className="block uppercase text-slate-600 font-bold text-xl"
              htmlFor="celular"
            >Celular </label>

            <input 
              type="number"
              id="celular"
              className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            />

            <label
              className="block uppercase text-slate-600 font-bold text-xl"
              htmlFor="avenida"
            >Avenida</label>

            <input 
              type="text"
              id="avenida"
              className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            />

            <label
              className="block uppercase text-slate-600 font-bold text-xl"
              htmlFor="calle"
            >Calle </label>

            <input 
              type="text"
              id="calle"
              className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            />

            <label
              className="block uppercase text-slate-600 font-bold text-xl"
              htmlFor="codigoPostal"
            >C.P </label>

            <input 
              type="text"
              id="codigoPostal"
              className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            />

            <label
              className="block uppercase text-slate-600 font-bold text-xl"
              htmlFor="numeroCalle"
            >Número de Calle </label>

            <input 
              type="number"
              id="numeroCalle"
              className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            />
          </div>
        </form>
        
        <div>
          <p>mapa</p>
        </div>
      </main>
    </Layout>


  )
}

export default Mapa;
