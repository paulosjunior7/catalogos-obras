import styled from 'styled-components';

export const MenuBar = styled.div`
  display: flex;
  flex-direction: column;

  
  width: 90%;
  max-width: 980px;
  
  margin: auto;
`

export const Filter = styled.div`
  display: flex;
  width: 100%;
  margin-top: 9px;
  input {
    border: 1px solid #ccc;
    width: 80%;
    border-radius: 4px;
    height: 30px;
    padding: 8px;
    margin-right: 2px;
  }

  select {
    width: 80%;
    cursor: pointer;
    border-radius: 4px;
    height: 30px;
    padding: 4px;
    margin-left: 2px;
  }
`

export const Status = styled.div`

  display: flex;
  width: 100%;
  justify-content: flex-end;

  .Em_Construção {
    background-color: #fff2dc;
  color: #F7B649;
  }

  .Concluida {
    background-color: #b4ecb4;
    color:  #3ace3a;
  }

  .Vendida {
    background-color: #f58787;
    color: #c40202;
  }
 

  @media (max-width: 474px) {
    max-width: 30rem;
  }
  
  a {
    font-size: 1.3rem;
    font-weight: bold;
    
    

    .emConstrucao {
      a {

      color: #F7B649;
      }
    }

    .concluida {
      color:  #3ace3a;
    }
    
    align-items: center;
  justify-content: flex-end;
  border-radius: 4px; 
    height: 22px;
  padding: 4px;
  max-width: 150px;
  display: flex;

    @media (max-width: 474px) {
      font-size: 1.7rem;
    }
  }
`

export const Descricao = styled.div`
  padding: 10px 10px;
  color: #333;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  span {
    display: flex;
    width: 100%;

    div {
    p {
      color: #4DB8AC;
      font-weight: bold;
      font-size: 1.8rem;
    }
  }
  }

  div {

      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      p {
        width: 100%;
      }
      svg { 
        color : #4CB8AC;
        margin-right: 3px;
      }
    }
    
  
    .bairro {
      font-size: 1.7rem;
      font-weight: bold;
    }
  p {


    font-size: 1.4rem;
    line-height: 2.8rem;

    @media (max-width: 474px) {
      font-size: 1.9rem;
    }
  }
  
  
`

export const Container = styled.div`
margin-bottom: 12px;
background-color: #F4F4F4;

header {
  background:  linear-gradient(60deg, #236BAB, #359ECB);;
  height: 55px;
  display: flex;  
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  color: #fff;
  padding-right: 32px;

  p {
    font-size: 2.0rem;
  }
}

header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 90%;
  max-width: 980px;
  
  margin: auto;
  
 
}

header img {
  width: 150px;
  margin-left: 20px;
  padding: 15px 0;
}

header nav ul {
  display: flex;
}

header nav ul li {
  list-style: none;
}

header nav ul li a {
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  font-size: 1.4rem; 
  padding: 2.4rem;
  transition: all 250ms linear 0s;

}

header nav ul li a:hover {
  background: rgba(255,255,255, 0.15)
}

h2 {
  color: rgb(75, 75, 75);
  font-size: 2.8rem;
  line-height: 3rem;
}

h3 {
  color: rgb(75, 75, 75);
  font-size: 2.8rem;
  line-height: 3.8rem;
}

.button {
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 600;
  color: rgb(255, 255, 255);
  background-color: #39A2AE;
  margin: 15px 0px 0px;
  padding: 12px 30px;
  text-decoration: none;
  transition: all 150ms linear 0s;
}

.button:hover {
  opacity: 0.9;
}


/*=============== 
HERO
==================*/
section.hero {
  margin: 12px 0;

}

section.hero .container {
  width: 90%;
  max-width: 980px;

  margin: auto;

  display: flex;
}

section.hero p {
  color: rgb(154, 142, 191);
  font-size: 1.8rem;
  line-height: 3.2rem;

}



/*=============== 
MAIN
==================*/
main {
  margin-bottom: 80px;
}
/*=============== 
CARDS
==================*/
.cards {
  width: 90%;
  max-width: 980px;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 20px;
}

.text--medium {
  font-size: 1.5rem;
  line-height: 2.5rem;

  @media (max-width: 474px) {
    font-size: 1.9rem;
  }
  font-weight: 400;
  color: #333;
}

.card {
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  border-radius: 0px;
  box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
  width: 100%;
  justify-content: space-between;

  
}

.card:hover {
  transform: translateY(-7px);
}

.image {
  width: 100%;
  padding-top: 56.25%; /* 16:9 */

  overflow: hidden;
  position: relative;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);

}

.image img {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.content {
  margin: 15px;
}

.title {
  //margin-bottom: 20px;
}

.info {
  display: flex;
  align-self: end;
  align-items: center;
}

.price {
  margin-left: auto;
  background-color: #236BAB;
  color: #333;
  filter: brightness(90%);
}

/*=============== 
MODAL
==================*/
.modal-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  visibility: hidden;
}
.modal-overlay.active {
  opacity: 1;
  visibility: visible;
}
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  background-color: #333;
  
  width: 95%;
  height: 95%;
  
  margin: 0 auto;
  padding: 10px;
  
  border-radius: 0px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  opacity: 0;
  overflow-y: auto;
  visibility: hidden;
  
  transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transform: scale(1.2);
}
.modal .close-modal {
  position: absolute;
  cursor: pointer;

  top: 5px;
  right: 15px;
  
  opacity: 0;
  
  transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1), transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition-delay: 0.3s;
}
.modal .close-modal svg {
  width: 18px;
  height: 18px;
}
.modal .modal-content {
  opacity: 0;
  transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition-delay: 0.3s;
}
.modal.active {
  visibility: visible;
  opacity: 1;
  transform: scale(1);
}
.modal.active .modal-content {
  opacity: 1;
}
.modal.active .close-modal {
  transform: translateY(10px);
  opacity: 1;
}

.video-background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -99;
  background-color: white;
}
.video-foreground,
.video-background iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 90%;
  transform: translate(-50%, -50%);
}



/*=============== 
FORM
==================*/
#form {
  width:100%;

  background: #7159c1;
  padding: 80px 0;
  margin:0;

  display:flex;
  align-items: center;
  justify-content: center;
}

#form form {
  width: 90%;
  max-width: 980px;

  background: white;
  
  padding: 40px;
  
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.15), 
    0px 10px 20px -10px rgba(0, 0, 0, 0.1)
}

#form h3 {
  margin-bottom: 30px
}

#form form label {
  display: none;
}

.form-group {
  display: flex;
  flex-direction: row;
}

.form-group label.right-inline {
  text-align: right;  
  padding-right: 8px;
  width: auto;
}

.form-group .input-control {
  flex: 1 1;
  display: block;
  margin: -4px 8px 10px;
  padding: 12px;
  font-size: 1.6rem;
}

#form .button {
  margin: 10px 8px 10px;
}

`;

export const Rodape = styled.div`
  margin-top: 4px;
  bottom: 0;
  width: 100%;
  display: flex;
`

export const Footer = styled.div`
  max-height: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  width: 100%;
  border-top: 1px solid #F4F4F4;
  padding-left: 10px;
  padding-right: 12px;

  span {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 20rem;

    div {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    
      p {
      }
    svg { 
        color : #4CB8AC;
        margin-right: 8px;
      }
    }

  }

  div {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: center;

      svg { 
        color : #4CB8AC;
        margin-right: 3px;
      }

    width: 100%;
    align-items: center;
    display: flex;
    p {
      &:last-child {
        color: #333;
      }
    }
  } 
`
