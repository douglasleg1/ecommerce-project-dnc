import React from "react";
import "./Login.scss";
import Header from "../../components/Header/Header";


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
                        <label>Digite seu CPF:</label>
                        <input type="text" placeholder="Nome completo"></input>
                        <label>Senha:</label>
                        <input type="password" placeholder="***************"></input>
                    </div>
                    <div className="buttonArea">
                        <button type="submit">Entrar</button>
                    </div>
                </div>

                </form>
            </section>
        </>
    )
}

export default Login