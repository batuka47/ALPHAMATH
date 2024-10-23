
import { useState } from 'react'

function Prop(props) {

  return (
    <div class="w-1/4 mt-40 flex flex-col justify-center items-center ">
        <img src={props.img} alt="icon" />      
        <h1 class="font-bold text-3xl text-center -mt-4 ">{props.title}</h1>
        <p class="text-center mt-4">{props.p1}</p>
    </div>
  )
}

export default Prop
