import React, { useState, useRef, useEffect, useCallback, Dispatch, Children } from 'react';
import { Background, Content, Head, Body, CloseModalButton } from './styles';
import { FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';

interface PropsModal {
    titulo?: string;
    showModal: boolean;
    setShowModal: Dispatch<boolean>;
    tamanhoReduzido?: boolean;
    handleShowModal(value : boolean) : void;
    handle(value : string) : void;
}

const Modal: React.FC<PropsModal> = ({ titulo,handle , showModal, setShowModal, handleShowModal, children , tamanhoReduzido = false }) => {
    const modalRef = useRef();

    const closeModal = (e: MouseEvent) => {
        if (modalRef.current === e.target) {
            handleShowModal(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
                handleShowModal(false);
            }
        },
        [setShowModal, showModal]
    );


    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

  
    return (
        <>
            { showModal ? (
                <Background >
                        <Content>
                            <Body>
                                {children}
                            </Body>
                            <Head>
                                <button  onClick={() => {handle('back')}}>
                                     <FiArrowLeft size={'2.0rem'} /> Anterior
                                </button>
                                <button onClick={() => {handle('next')}}>
                                Proxima
                                    <FiArrowRight size={'2.0rem'} />
                                </button>
                                <button  onClick={() => {handleShowModal(false)}}>Fechar</button>
                             
                            </Head>

                        </Content>
                </Background >
            ) : null
            }
        </>

    );
}

export default Modal;