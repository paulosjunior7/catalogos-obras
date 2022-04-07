import react, { useState } from 'react';
import Header from '../../components/Header'
import { Casas } from '../../utils/residencias'

import { Link, useHistory } from 'react-router-dom'
import { Container, Descricao, Filter, MenuBar, Footer , Status,Rodape} from './styles'

import { ImPriceTags } from 'react-icons/im';
import { BiArea } from 'react-icons/bi';
import { IoMdTime } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { GrInfo } from 'react-icons/gr';
import { BiCalendar } from 'react-icons/bi';
import { FaShower, FaBed } from 'react-icons/fa';

import { ModalCasa } from '../../modal/modalCasa'


const Home = () => {
  const history = useHistory()
  const [pesquisaBairro, setPesquisaBairro] = useState('');
  const [pesquisaStatus, setPesquisaStatus] = useState('');

  function handleDetalhe(id: number) {
    history.push(`/detalhe/${id}`);
  }

  const filteredValues = Casas.filter((casas: ModalCasa) => {
    return casas.status.toLowerCase().includes(pesquisaStatus.toLowerCase()) && casas.bairro.toLowerCase().includes(pesquisaBairro.toLowerCase())
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
            <input type="text" placeholder="Pesquisar bairro" onChange={e => setPesquisaBairro(e.target.value)} />

            <select onChange={e => setPesquisaStatus(e.target.value)}>
              <option value="" disabled selected>Pesquisar status</option>
              <option value="">Todas</option>
              {
                Casas.map((ca: ModalCasa) => {
                  <option key={ca.id} value={ca.status}>{ca.status}</option>
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
                  <img src={p.imagens[0]} />
                </div>

                <Descricao>
                  <span>
                    <div>
                     <p>{p.valor}</p> 
                    </div>

                    <Status className={ p.status }>
                      <a className={ p.status } >{p.status.replace("_", " ").toUpperCase()}</a>
                    </Status>
                  </span>


                  <p className="bairro">{p.bairro}</p>

                  <div>
                    <IoLocationOutline size={20} />
                    <p>{p.endereco}</p>
                  </div>


                  <div>
                    <BiCalendar size={18} />
                    <p>{p.previsaoConclusao}</p>
                  </div>


                </Descricao>

                <Footer>
                  <div>
                    <BiArea size={18} />
                    <p>{p.areaConstruida}</p>
                  </div>

                  <span>
                    <div>

                      <FaShower size={16} />
                      <p>{p.banheiros}</p>
                    </div>
                    <div>

                      <FaBed size={18} />
                      <p>{p.quartos}</p>
                    </div>
                  </span>
                </Footer>

              </div>
            )
          }

        </section>
      </main>
      <Rodape>

      </Rodape>

    </ Container>
  )
}

export default Home;



