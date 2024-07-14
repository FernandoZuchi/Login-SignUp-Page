import './LoginSignup.css'
import email from '../assets/email.png'
import password from '../assets/password.png'
import person from '../assets/person.png'
import { useState } from 'react'

const LoginSignup = () => {

    const [action, setAction] = useState("Cadastre-se");

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> : <div className="input">
                    <img src={person} alt="" />
                    <input type="text" placeholder='Nome' />
                </div>}
                <div className="input">
                    <img src={email} alt="" />
                    <input type="email" placeholder='E-mail' />
                </div>
                <div className="input">
                    <img src={password} alt="" />
                    <input type="password" placeholder='Senha' />
                </div>
            </div>
            {action === "Cadastre-se" ? <div></div> : <div className="forgot-password">Esqueceu a senha? <span>Clique aqui!</span></div>}
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Cadastre-se")}>
                    Cadastre-se
                </div>
                <div className={action === "Cadastre-se" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>
                    Login
                </div>
            </div>
        </div>
    )
}

export default LoginSignup