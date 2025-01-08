import React from 'react'
import '../Style/main.css'
import crypto from '../../assets/imgs/crypto (1).png'
import icon from '../../assets/imgs/icon/icon.svg'

export default function Main() {
  return (
    <main class="border 2px border-red-500  xsm:h-[212vh] flex flex-col justify-evenly items-center">
      <section class="border border-blue-500 xsm:w-[90vw]">
        <div class="border border-purple-900 font-body font-bold text-center">
          <p class="font-body text-[0.7rem] ">Bem-vindo de volta</p>
          <h1 class="font-body text-[0.75rem]">Faça login na sua conta</h1>
        </div>
        <div class= "hidden">
          <figcaption>
            <img src={crypto} alt="arte design do bank" />
          </figcaption>
        </div>
      </section>
      {/* APARTIR DAQUI */}
      <section class="item forms">
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

