import { useState } from 'react'

function Welcome() {

  return (
    <div class="w-full h-full relative">

      <img src="/img1.png" alt=""  class="object-contain absolute"/>
      <h1 class="text-5xl absolute text-center m-40 text-white">
        Математикийн ЭЕШ-ийн дүнгээ EYSH.mn-ээр үнэгүй сайжруулаарай.
      </h1>
      <div class="ml-96">
        <button class="absolute w-80 h-20 text-5xl text-center mt-72 ml-8 rounded-3xl text-white bg-gradient-to-r from-violet-700 to-emerald-400">Эхлэх</button>
      </div>
    </div>
  )
}

export default Welcome
