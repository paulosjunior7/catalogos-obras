
import React, { useEffect, useState } from 'react'
import { Link, useHistory, match } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';
import { RiDownloadCloud2Line } from 'react-icons/ri';
import { ImWhatsapp } from 'react-icons/im';
import { CgMaximizeAlt } from 'react-icons/cg';
import { BiDownload } from 'react-icons/bi';

import { ModalCasa } from '../../modal/modalCasa';

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";


//import api from '../../services/api'

import {
    Container, Section, Content, Carousel,
    Section2, BackgroudImage, Navegador, Header, Body, Acao, Contato, Whatsapp, Imagem, Head, ImagemModal
} from './styles';

import { Casas } from '../../utils/residencias';

interface Props {
    match: any;
}

interface PropsFotos {
    key: number;
    value: string;
}

const Detalhe: React.FC<Props> = ({ match }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('');

    const [fotos, setFotos] = useState<PropsFotos[]>([]);
    const [fotoSelecionada, setFotoSelecionada] = useState<number>(0);

    const history = useHistory()

    const [detalheCasa, setDetalheCasa] = useState<ModalCasa>();

    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        fotos.forEach((image) => {
            new Image().src = image.value
        });
    })

    useEffect(() => {

        async function Pesquisar() {
            const detalhe = Casas.find(p => p.id === Number(match.params.id));

            setDetalheCasa(detalhe);

            const qt = detalhe?.imagens.length!;

            const fots = [];
            for (let index = 0; index < qt; index++) {
                const value = { value: detalhe?.imagens[index]!, key: index };
                fots.push(value);
            }
            setFotos(fots);
        }

        Pesquisar()

    }, [match.params.id])

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

    function handleShowModal() {
        setShowModal(!showModal);
    }


    const bg = {
        closeIcon: {
            background: "#fff"
        },

    };

    function DownloadImagem(link : string) {
        var element = document.createElement("a");
        var file = new Blob(
          [
            link
          ],
          { type: "image/*" }
        );
        element.href = URL.createObjectURL(file);
        element.download = `imagem${Math.random()}.${ext(link)}`;
        element.click();
    }

    function ext(path: string) {
        var final = path.substr(path.lastIndexOf('/')+1);
        var separador = final.lastIndexOf('.');
        return separador <= 0 ? '' : final.substr(separador + 1);
    }

    return (
        <Container>
            <BackgroudImage />
            <Content>
                <Header style={{}}>
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
                        {detalheCasa?.lote != "" && <p> Lote: <a>{detalheCasa?.lote}</a> </p>}
                        <p> Condições: <a>{detalheCasa?.condicoes} </a></p>
                        <p> Status: <a>{detalheCasa?.status.replace("_", " ")} </a></p>
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
                            
                            {fotos && (
                                fotos.map((p: PropsFotos) =>
                                    <Imagem img={p.value!} onClick={() => { setFotoSelecionada(p.key); handleShowModal() }} >
                                        <CgMaximizeAlt size={'3.0rem'} />
                                    </Imagem>
                                ))
                            }


                            <Modal open={showModal} center={true} onClose={handleShowModal} showCloseIcon={false} >
                                {
                                    fotos.length > 0 && (
                                        <ImagemModal
                                            src={fotos[fotoSelecionada].value} />)

                                }
                                <Head>
                                    <a href={fotos[fotoSelecionada]?.value.toString()} download>
                                        <BiDownload size={'2.0rem'} /> Baixar Foto
                                    </a>   
                                    <button onClick={() => { handle('back') }}>
                                        <FiArrowLeft size={'2.0rem'} /> Anterior
                                    </button>
                                    <button onClick={() => { handle('next') }}>
                                        Proxima
                                    <FiArrowRight size={'2.0rem'} />
                                    </button>
                                    <button onClick={() => { handleShowModal() }}>Fechar</button>

                                </Head>
                            </Modal>

                        </Carousel>
                    </Section2>
                </Body>
            </Content>
        </Container>
    )
}

export default Detalhe;
