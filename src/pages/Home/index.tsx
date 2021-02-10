import react, { useState } from 'react';
import Header from '../../components/Header'
import { Casas } from '../../utils/residencias'

import { Link, useHistory } from 'react-router-dom'
import { Container, Descricao, Filter , MenuBar } from './styles'

interface CasasModal {
  id: number,
  endereco: string,
  bairro: string,
  valor: string,
  status: string,
  detalhes: string[],
  condicoes: string,
  metragem: string,
  fracaolote: string,
  imagens: string[]
}

const Home = () => {
  const history = useHistory()
  const [ pesquisa, SetPesquisa ] = useState('');

  function handleDetalhe(id: number) {
    history.push(`/detalhe/${id}`);
  }
  
  const filteredValues = Casas.filter((casas: CasasModal) => {
      return (
        casas.bairro.toLowerCase().includes(pesquisa.toLowerCase())
      )
  });

  return (
    <Container>
      <header>
        <p>JMS Construção e Projeto Engenharia</p>
      </header>


      <section className="hero">
        <MenuBar>
          <div>
            <h2>
              Relação de casas disponíveis para venda
          </h2>
          </div>
            <Filter>
              <input type="text" placeholder="Pesquisar bairro" onChange={e => SetPesquisa(e.target.value)} />
            </Filter>
        </MenuBar>
      </section>

      <main>
        <section className="cards">

          {
            filteredValues.map(p =>
              <div className="card" key={p.id} onClick={() => handleDetalhe(p.id)}>
                <div className="image">
                  <img src={p.imagens[1]} />
                </div>

                <Descricao>
                  <p>{p.bairro}</p>
                  <p>{p.endereco}</p>
                  <p>{p.metragem}</p>
                  <div>
                    <p>{p.valor}</p>
                    <p>{p.status}</p>
                  </div>
                </Descricao>

              </div>
            )
          }

        </section>
      </main>

    

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


