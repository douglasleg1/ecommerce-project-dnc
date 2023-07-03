import React from 'react'
import "./Header.scss"
import logoDNC from "../../assets/dnc-logo.svg"

const Header = () => {
  return (
    <>
        <div className='header'>
            <img src={logoDNC} alt=""></img>
        </div>
    </>
  )
}

export default Header