

const Producto = () => {
  return (
    <div>
      <h1>Desde producto</h1>
      
    </div>
  )
}

export async function getServerSideProps({query: {url}}) {

  const url = `${process.env.API_URL}/guitarras`

  return {
    props: {

    }
  }
}

export default Producto
