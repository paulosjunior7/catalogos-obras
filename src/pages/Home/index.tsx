import react, { useState } from 'react';
import Header from '../../components/Header'
import { Casas } from '../../utils/residencias'

import { Link, useHistory } from 'react-router-dom'
import { Container, Descricao, Filter, MenuBar } from './styles'

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
  const [ pesquisaBairro, setPesquisaBairro] = useState('');
  const [ pesquisaStatus, setPesquisaStatus] = useState('');

  function handleDetalhe(id: number) {
    history.push(`/detalhe/${id}`);
  }


  const filteredValues = Casas.filter((casas: CasasModal) => {
    return casas.status.toLowerCase().includes(pesquisaStatus.toLowerCase()) && casas.bairro.toLowerCase().includes(pesquisaBairro.toLowerCase())
  });

  console.log(pesquisaStatus);
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
            <input type="text" placeholder="Pesquisar bairro" onChange={e => setPesquisaBairro(e.target.value)} />

            <select onChange={e => setPesquisaStatus(e.target.value)}>
              <option value="" disabled selected>Pesquisar status</option>
              <option value="">Todas</option>
              {
                Casas.map((ca:CasasModal) => 
                  {
                    <option key={ca.status} value={ca.status}>{ca.status}</option>
                  }
                )
              }
              
              <option value="Em Construção">Em Construção</option>
              <option value="A Venda">A Venda</option>
              <option value="Vendida">Vendida</option>
              <option value="Concluída">Concluída</option>

            </select>

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
    </ Container>
  )
}

export default Home;



