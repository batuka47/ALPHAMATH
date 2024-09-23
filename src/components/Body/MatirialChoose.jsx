import { useState } from 'react'
import { Link } from 'react-router-dom'
import A from '../../assets/A'
import B from '../../assets/B'
import C from '../../assets/C'
import D from '../../assets/D'
function MatirialChoose(props){
    return (
       <div class="flex w-96 h-32 flex-row border-solid border-violet-600 border-4 rounded-3xl p-4">
            <div class="w-4/6 gap-5 flex flex-col justify-center ">
                <h1 class="font-bold text-2xl">Математик {props.year} он</h1>
                <div class="flex flex-row">
                    <Link to={`/${props.year}-A`}><A /></Link>
                    <Link to={`/${props.year}-B`}><B /></Link>
                    <Link to={`/${props.year}-C`}><C /></Link>
                    <Link to={`/${props.year}-D`}><D /></Link>
                </div>
            </div>
       </div>
    )
}
export default MatirialChoose