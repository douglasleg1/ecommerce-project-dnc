import React from 'react'
import "./HeaderStore.scss"
import logoDNC from "../../assets/dnc-logo.svg"
import cartIcon from "../../assets/cart-icon.svg"

const HeaderStore = () => {
  return (
        <section className='headerStore'>
            <div className='sectionsMenu'>
                <ul>
                    <li>
                        <img src={logoDNC} alt=''></img>
                    </li>
                    <li className='home-text-menu'>Home</li>
                    <li>Novidades</li>
                    <li>Feminino</li>
                    <li>Masculino</li>
                    <li>Atendimento</li>
                </ul>
            </div>
            <div className='storeMenu'>
                <ul>
                    <li>Meu Carrinho</li>
                    <li>
                        <img src={cartIcon} alt=''></img>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default HeaderStore