

const Producto = () => {
  return (
    <div>
      <h1>Desde producto</h1>
      
    </div>
  )
}

export async function getServerSideProps({query: {url}}) {

  const url = `${process.env.}`

  return {
    props: {

    }
  }
}

export default Producto
