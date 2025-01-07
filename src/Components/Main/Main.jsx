import React from 'react'
import '../Style/main.css'
import crypto from '../../assets/imgs/crypto (1).png'
import icon from '../../assets/imgs/icon/icon.svg'

export default function Main() {
  return (
    <main>
      <section>
        <div>
          <p>Bem-vindo de volta</p>
          <h1>Faça login na sua conta</h1>
        </div>
        <div>
          <figcaption>
            <img src={crypto} alt="arte design do bank" />
          </figcaption>
        </div>
      </section>
      <section>
        <form action="">
          <label htmlFor="box">E-mail</label>
          <input id="box" type="email" name="E-mail" placeholder='exemplo@gmail.com' required />

          <label htmlFor="text">Senha</label>
          <input id="text" type="password" name="Senha" placeholder='*********' required />

          <label htmlFor="true">Lembre de min</label>
          <input id='true' type="radio" name='user'/>
          <p>Esqueceu sua senha?</p>

          <button>Entrar na conta</button>
          <butto>Ou faça o login com o Google</butto>
        </form>
      </section>
    </main>
  )
}

