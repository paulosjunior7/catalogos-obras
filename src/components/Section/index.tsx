import react from 'react';

const Section = () => {

    return (
        <section className="hero">
            <div className="container">
                <div>
                    <h2>
                        As melhores tecnologias em programação, direto ao ponto e do jeito
                        certo.
          </h2>
                    <p>
                        No meio de tanta informação e da quantidade de ferramentas que
                        surgem todos os dias, você precisa de alguém que te leve na direção
                        certa.
          </p>
                    <a href="#" className="button">Quero embarcar neste foguete!</a>
                </div>
                <img
                    src="./images/melhores-tecnologias.svg"
                    alt=""
                />
            </div>
        </section>

    )

}

export default Section;