
import React, { useEffect, useState } from 'react'
import { Link, useHistory, match } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';
import { RiDownloadCloud2Line } from 'react-icons/ri';
import { ImWhatsapp } from 'react-icons/im';


//import api from '../../services/api'

import { Container, Section, Content, Carousel, Section2, BackgroudImage, Navegador, Header, Body, Acao, Contato , Whatsapp } from './styles';
import { Casas } from '../../utils/residencias';

interface Casa {
    id: number;
    endereco: string;
    bairro: string;
    valor: string;
    status: string;
    detalhes: string[];
    condicoes: string;
    metragem: string;
    fracaolote: string;
    imagens: string[];
}

interface Props {
    match: any;
}

const Detalhe: React.FC<Props> = ({ match }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('');

    const [fotos, setFotos] = useState<string[]>([]);
    const [fotoSelecionada, setFotoSelecionada] = useState<number>(0);

    const history = useHistory()

    const [detalheCasa, setDetalheCasa] = useState<Casa>();

    useEffect(() => {

        async function Pesquisar() {
            const detalhe = Casas.find(p => p.id === Number(match.params.id));
            setDetalheCasa(detalhe);
            setFotos(detalhe?.imagens!);
        }

        Pesquisar()

    }, [match.params.id])

    const fileDownloadHandler = async () => {
        for (var i = 0; i < fotos.length; i++) {
            const response = await fetch(fotos[i]);
            response.blob().then(blob => {
                let url = window.URL.createObjectURL(blob);
                let a = document.createElement('a');
                a.href = url;
                a.download = 'picture.jpeg';
                a.click();
            });
        }
    }

    function handle(a: string) {
        if (a === 'next') {
            if (fotoSelecionada === fotos.length - 1) {
                setFotoSelecionada(0);
            } else {
                setFotoSelecionada(fotoSelecionada + 1)
            }
        } else {
            if (fotoSelecionada === 0) {
                setFotoSelecionada(fotos.length - 1);
            } else {
                setFotoSelecionada(fotoSelecionada - 1)
            }
        }
    }



    return (
        <Container>
            <BackgroudImage />
            <Content>
                <Header>
                    <FiX size={28} onClick={() => history.push('/')} />
                </Header>
                <Body>

                    <Section>
                        <h2> {detalheCasa?.bairro} </h2>
                        <p>Endereço: <a>{detalheCasa?.endereco}</a> </p>
                        <p>Bairro: <a>{detalheCasa?.bairro}</a> </p>
                        <p> Fração do Lote: <a>{detalheCasa?.fracaolote} </a></p>
                        <p> Metragem: <a>{detalheCasa?.metragem} </a></p>
                        <p> Condições: <a>{detalheCasa?.condicoes} </a></p>
                        <p> Status: <a>{detalheCasa?.status} </a></p>
                        <p> Detalhes: </p>
                        <ul>
                            {
                                detalheCasa?.detalhes.map(p =>
                                    <li>{p}</li>
                                )
                            }
                        </ul>
                        <p> <h2>Valor : {detalheCasa?.valor} </h2> </p>

                        <Contato>
                            <Whatsapp number="5562983002211" message={`Olá, Gostaria de mais informações das casas disponiveis para venda, ${detalheCasa.endereco} ${detalheCasa.bairro}`} >
                                <ImWhatsapp size={'1.8rem'} />
                                <a>Eng.Juliana Machado</a>
                            </Whatsapp>

                            <Whatsapp number="5562992046138" message={`Olá, Gostaria de mais informações das casas disponiveis para venda, ${detalheCasa.endereco} ${detalheCasa.bairro}`} >
                                <ImWhatsapp size={'1.8rem'} />
                                <a>Eng.Antônio Carlos</a>
                            </Whatsapp>
                        </Contato>

                    </Section>

                    <Section2>
                        <Carousel>
                            {fotos && (
                                <img src={fotos[fotoSelecionada]} alt="foto" />
                            )
                            }
                            <Navegador>
                                <button onClick={() => handle('prev')}>
                                    <FiArrowLeft size={18} />
                                </button>
                                <button onClick={() => handle('next')}>
                                    <FiArrowRight size={18} />
                                </button>
                            </Navegador>
                            <Acao>
                                <button onClick={() => fileDownloadHandler()}>
                                    <RiDownloadCloud2Line size={'1.8rem'} />
                                    <a>Baixar Imagens</a>
                                </button>
                            </Acao>
                        </Carousel>
                    </Section2>

                </Body>
            </Content>

        </Container>
    )
}

export default Detalhe;