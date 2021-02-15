
import React, { useEffect, useState } from 'react'
import { Link, useHistory, match } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';
import { RiDownloadCloud2Line } from 'react-icons/ri';
import { ImWhatsapp } from 'react-icons/im';


//import api from '../../services/api'

import {
    Container, Section, Content, Carousel,
    Section2, BackgroudImage, Navegador, Header, Body, Acao, Contato, Whatsapp, Imagem
} from './styles';
import { Casas } from '../../utils/residencias';

interface Casa {
    id: number;
    endereco: string;
    bairro: string;
    cidade: string;
    valor: string;
    status: string;
    previsaoConclusao: string;
    detalhes: string[];
    condicoes: string;
    areaConstruida: string;
    lote: string;
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
        fotos.forEach((image) => {
            new Image().src = image
        });
    })

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


    const [imageLoaded, setImageLoaded] = useState(false);

    // src image and trace image url
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
                        <p> Endereço: <a>{detalheCasa?.endereco}</a> </p>
                        <p> Bairro: <a>{detalheCasa?.bairro}</a> </p>
                        <p> Cidade: <a>{detalheCasa?.cidade}</a> </p>
                        {detalheCasa?.fracaolote != "" && <p> Fração do Lote: <a>{detalheCasa?.fracaolote} </a></p>}
                        <p> Área Construida: <a>{detalheCasa?.areaConstruida} </a></p>
                        <p> Lote: <a>{detalheCasa?.lote}</a> </p>
                        <p> Condições: <a>{detalheCasa?.condicoes} </a></p>
                        <p> Status: <a>{detalheCasa?.status} </a></p>
                        <p> Previsão de Conclusão: <a>{detalheCasa?.previsaoConclusao} </a></p>
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

                            <div>
                                <Whatsapp number="5562983002211" message={`Olá, Gostaria de mais informações das casas disponiveis para venda`} >
                                    <ImWhatsapp size={'1.8rem'} />
                                    <a>Eng.Juliana Machado</a>
                                </Whatsapp>
                            </div>
                            <div>
                                <Whatsapp number="5562992046138" message={`Olá, Gostaria de mais informações das casas disponiveis para venda`}>
                                    <ImWhatsapp size={'1.8rem'} />
                                    <a>Eng.Antônio Carlos</a>
                                </Whatsapp>
                            </div>

                        </Contato>

                    </Section>

                    <Section2>
                        <Carousel>

                            {/* <Navegador>
                                <button onClick={() => handle('prev')}>
                                    <FiArrowLeft size={18} />
                                </button>
                                <a>
                                    {fotoSelecionada + 1}/{fotos.length}
                                </a>
                                <button onClick={() => handle('next')}>
                                    <FiArrowRight size={18} />
                                </button>
                            </Navegador> */}

                            {/* 
                            <div>
                                {!imageLoaded && (
                                    <div className="c-loader"></div>
                                )}
                            </div> */}

                            {fotos && (

                                fotos.map(p =>
                                    <Imagem img={p} />
                                    // <img
                                    //     src={p}
                                    //     alt="foto"
                                    //     loading="lazy"
                                    //     style={{
                                    //         opacity: imageLoaded ? "1" : "0",
                                    //     }}
                                    //     onLoad={() => setImageLoaded(true)}
                                    // />
                                )
                            )
                            }

                            {/* <Acao>
                                <button onClick={() => fileDownloadHandler()}>
                                    <RiDownloadCloud2Line size={'1.8rem'} />
                                    <a>Baixar Imagens</a>
                                </button>
                            </Acao> */}

                        </Carousel>
                    </Section2>

                </Body>
            </Content>

        </Container>
    )
}

export default Detalhe;