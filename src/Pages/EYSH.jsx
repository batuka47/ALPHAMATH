import { useState } from 'react'
import '../App.css'
import Header from '../components/Header/Header'
import Fooder from '../components/Fooder/Fooder'
import MatirialChoose from '../components/Body/MatirialChoose'
function EYSH(){
    const year = [
        {
            title: "2024"
        },
        {
            title: "2023"
        },
        {
            title: "2022"
        },
        {
            title: "2021"
        },
        {
            title: "2020"
        },
        {
            title: "2019"
        },
        {
            title: "2018"
        },
        {
            title: "2017"
        },
        {
            title: "2016"
        },
        {
            title: "2015"
        },
        {
            title: "2014"
        },
        {
            title: "2013"
        },
        {
            title: "2012"
        },
        {
            title: "2011"
        },
        {
            title: "2010"
        },
        {
            title: "2009"
        },
        {
            title: "2008"
        },
        {
            title: "2007"
        },
        {
            title: "2006"
        },
      ]
    return (
       <div className='body' class="flex items-center  min-h-100vh flex-col gap-20" >
        <Header/>
        <h1 class="text-5xl font-extrabold text-violet-600">Он оны ЭЕШ-ийн тестүүд</h1>
        <div class="grid grid-cols-3 gap-6">
            {
                year.map((data)=>{
                    return <MatirialChoose class="" year={data.title}/>
                })
            }
        </div>


        <Fooder/>
       </div>
    )
}
export default EYSH