import { useState } from 'react'
import '../App.css'
import Header from '../components/Header/Header'
import Fooder from '../components/Fooder/Fooder'
import Task1 from '../components/Body/Task1'

function EYSH(){
    return (
       <div className='body' class="flex items-center  min-h-100vh flex-col"  width="1200px">
        <Header/>
        <Task1/>
        <Fooder/>
       </div>
    )
}
export default EYSH