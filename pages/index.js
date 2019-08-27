
import Head from 'next/head'
import Base from '../layout/base'
import Link from 'next/link'
import axios from 'axios'

export default class extends React.Component {
  static async getInitialProps({ req, query }) {
    const pagina = query.pagina ? Number(query.pagina) : 1
    const respuesta = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=2cb672de&s=batman&page=${pagina}`)
    const peliculas = respuesta.data.Search

    return { peliculas, pagina }
  }

  render() {
    return (
      <Base>
        <Head>
          <title>Películas</title>
        </Head>
        <div>
          {this.props.peliculas.map((p) => (
            <>
              <h1>{p.Title}</h1>
              <img src={p.Poster} alt={p.Title} />
            </>
          ))}
          
          {this.renderPaginacion()}
        </div>
      </Base>
    )
  }

  renderPaginacion() {
    const anterior = this.props.pagina > 1 ?
      <Link href={`/?pagina=${this.props.pagina - 1}`}><a>Anterior</a></Link>
      : null
    
    return (
      <div className="control">
        {anterior}
        <Link href={`/?pagina=${this.props.pagina + 1}`}><a>Siguiente</a></Link>
        <style jsx>{`
          .control {
            text-align: center;
          }
          .control a {
            padding: 0 10px;
          }
        `}</style>
      </div>
    )
  }
}