import React from "react";
import "./Login.scss";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <>
            <section className="login">
                <div className="headerArea">
                    <Header></Header>
                </div>
                <form>
                <div className="loginArea">
                    <div>
                        <h1>Acesse com seu login ou cadastre-se!</h1>
                        <h2>você pode entrar com o seu CPF</h2>
                    </div>
                    <div className="loginInputs">
                        <label htmlFor="cpf">Digite seu CPF:</label>
                        <input id="cpf" type="text" placeholder="Nome completo"></input>
                        <label htmlFor="password">Senha:</label>
                        <input id="password" type="password" placeholder="***************"></input>
                    </div>
                    <div className="buttonArea">
                        <Link to={"/home"}><button type="submit">Entrar</button></Link>
                    </div>
                </div>

                </form>
            </section>
        </>
    )
}

export default Login