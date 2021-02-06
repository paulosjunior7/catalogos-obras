
import React, { useEffect, useState } from 'react'
import { Link, useHistory , useLocation } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

//import api from '../../services/api'

import { Container, Section, Content, Carousel, Section2, Page , Nav } from './styles';
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

export default function Detalhe() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('');

    const [fotos, setFotos] = useState<string[]>([]);
    const [fotoSelecionada, setFotoSelecionada] = useState<number>(0);

    const history = useHistory()

    async function handleNewIncident(e: any) {
        e.preventDefault()
        const data = {
            title,
            description,
            value,
        }
        try {
            // await api.post('/incidents', data, {
            //     headers: {
            //         Authorization: ongId,
            //     }
            // })

            history.push('/profile')
        } catch (err) {
            alert('Erro ao cadastrar caso, tente novamente.')
        }
    }
    const [detalheCasa, setDetalheCasa] = useState<Casa>(); 
    
    useEffect(() => {
        const id = useLocation().state;
        const detalhe = Casas.find(p => p.id === Number(id));
        setDetalheCasa(detalhe);
        setFotos(detalhe?.imagens!);
        console.log(detalhe);
    }, [])

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
            <Content>
                <Section>

                    {/* <img src={logoImg} alt="Be The Hero" /> */}
                    <h2> {detalheCasa?.bairro} </h2>
                    <p>  {detalheCasa?.endereco} </p>
                    <ul>
                        {
                            detalheCasa?.detalhes.map(p =>
                                <li>{p}</li>
                            )
                        }
                    </ul>
                    <p> Fração do Lote: {detalheCasa?.fracaolote} </p>
                    <p> Metragem: {detalheCasa?.metragem} </p>
                    <p> Condições: {detalheCasa?.condicoes} </p>
                    <p> Status: {detalheCasa?.status} </p>
                    <p> <h2>Valor : {detalheCasa?.valor} </h2> </p>

                </Section>
                <Section2>
                    <Carousel>
                      

                    </Carousel>

                    <Nav>
                        <button onClick={() => handle('prev')}>
                            <FiArrowLeft size={32} />
                        </button>
                        <button onClick={() => handle('next')}>
                            <FiArrowRight size={32} />
                        </button>
                    </Nav>


                    <button onClick={() => fileDownloadHandler()}>
                        <a>Baixar Imagens</a>
                    </button>
                    <button onClick={() => history.push('/')}>
                        <a>Voltar</a>
                    </button>

                </Section2>
            </Content>

        </Container>
    )
}