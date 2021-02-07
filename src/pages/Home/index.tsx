import react from 'react';
import Header from '../../components/Header'
import { Casas } from '../../utils/residencias'

import { Link, useHistory } from 'react-router-dom'
import { Container } from './styles'

const Home = () => {
  const history = useHistory()

  function handleDetalhe(id: number) {
    history.push('/detalhe', {
      id: 1
    });
  }

  return (
    <Container>
      <header>
        <p>JMS Construção e Projeto Engenharia</p>
      </header>

      <section className="hero">
        <div className="container">
          <div>
            <h2>
              Relação de casas disponíveis para venda
          </h2>
          </div>

        </div>
      </section>

      <main>
        <section className="cards">

          {
            Casas.map(p =>
              <div className="card" key={p.id} onClick={() => handleDetalhe(p.id)}>
                <div className="image">
                  <img src={p.imagens[1]} />
                </div>
                <div className="content">
                  <p className="title text--medium">
                    {p.endereco}
                  </p>
                  <p className="title text--medium">
                    {p.bairro}
                  </p>
                  <p className="title text--medium"></p>
                  <div className="info">
                    <p className="text--medium">{p.valor}</p>
                    <p className="price text--medium">{p.status}</p>
                  </div>
                </div>
              </div>
            )

          }

        </section>
      </main>

      {/* <section id="form">
        <form action="">
          <h3>Solicitar Orçamento!</h3>
          <div className="form-group">
            <input className="input-control" placeholder="Nome" />

            <input type="email" className="input-control" placeholder="Email" />
          </div>

          <div className="form-group">
            <input className="input-control" placeholder="Empresa" />
          </div>

          <div className="form-group">
            <input className="input-control" placeholder="Endereço" />
          </div>

          <div className="form-group">
            <input className="input-control" placeholder="Cidade" style={{ flex: '3 2' }} />
            <input className="input-control" placeholder="Estado" style={{ flex: '1' }} />
            <input className="input-control" placeholder="CEP" style={{ flex: '1' }} />
          </div>

          <div className="form-group">
            <button type="submit" className="button">Save</button>

          </div>

        </form>
      </section> */}

      <div className="modal-overlay">
        <div className="modal">
          <a className="close-modal">
            <svg viewBox="0 0 20 20">
              <path
                fill="#000000"
                d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
              ></path>
            </svg>
          </a>
          <div className="modal-content">
            <div className="video-background">
              <div className="video-foreground">
                <iframe
                  src="https://www.youtube.com/embed/GykTLqODQuU"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

    </ Container>
  )
}

export default Home;


