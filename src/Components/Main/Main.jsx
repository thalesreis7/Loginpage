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
      <section class=" border border-red-700 xsm:h-[212vh]  ">
        <form action="" class="xsm:w-[90vw] font-body flex-col justify-between">
          <label htmlFor="box" class="text-[0.7rem] font-bold">E-mail</label>
          <input id="box" type="email" name="E-mail" placeholder='exemplo@gmail.com' required class="xsm:w-[85vw] bg-gray-500/30 rounded-sm text-sm text-center outline-none"
          />

          <label htmlFor="text" class="text-[0.7rem] font-bold">Senha</label>
          <input id="text" type="password" name="Senha" placeholder='*********' required class="xsm:w-[86vw] h-[14vh] bg-gray-500/30 rounded-sm text-sm pl-1 pt-1 outline-none"/>
          <div class=" border border-green-600 flex-col items-stretch">
            <input id='true' type="radio" name='user'/>
            <label htmlFor="true" class="xsm: text-[0.7rem] font-bold text-right">Lembre de min</label>
            <p class="text-[0.7rem] font-bold text-green-600 cursor-pointer">Esqueceu sua senha?</p>
          </div>
           {/* Stop HERE */}
          <button>Entrar na conta</button>
          <butto>Ou faça o login com o Google</butto>
        </form>
      </section>
    </main>
  )
}

