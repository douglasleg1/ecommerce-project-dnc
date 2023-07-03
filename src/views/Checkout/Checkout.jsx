import React from 'react'
import Header from '../../components/Header/Header'
import squareIcon from "../../assets/square-icon.svg"
import {Link, useParams} from "react-router-dom"
import "./Checkout.scss"
import backgroudOrderDetail from "../../assets/backgroud-order-detail.svg";
import lineOrderDetail from "../../assets/line-order-detail.svg";

const Checkout = ({data}) => {
  const { checkoutId } = useParams();
  const selectedProduct = data.find((product) => product.id == checkoutId);

  return (
    <>
    <Header/>
    <section className='checkout'>
      <div className='detail-client'>
        <div className='input-labels'>
          <label htmlFor='nome'>Nome: </label>
          <input type='text' placeholder='Nome completo'></input>
        </div>
        <div className='input-labels'>
          <label htmlFor='endereco'>Endereço de Entrega:  </label>
          <input type='text' placeholder='Endereço de Entrega'></input>
        </div>
        <div className='methods-payments'>
          <p>
            Forma de Pagamento:
          </p>
          <ul>
            <li>
              <img src={squareIcon} alt=''></img>
              <label>Pix</label>
            </li>
            <li>
            <img src={squareIcon} alt=''></img>
            <label>Boleto</label>
            </li>
            <li>
            <img src={squareIcon} alt=''></img>
            <label>Cartão de Crédito</label>
            </li>
          </ul>
        </div>
        <div className='button-area'>
          <Link to="/"><button>Enviar Pedido</button></Link>
        </div>
      </div>
      <div className='detail-order'>
        <p>Resumo do Pedido:</p>
        <div>
          <ul>
            <li>Produtos(1):</li>
            <li className='priceProduct'>{selectedProduct.price}</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Total:</li>
            <li className='priceProduct'>{selectedProduct.price}</li>
          </ul>
        </div>
        <img id="background" src={backgroudOrderDetail} alt=''></img>
        <img id="line-order" src={lineOrderDetail} alt=''></img>
      </div>
    </section>
    </>
  )
}

export default Checkout