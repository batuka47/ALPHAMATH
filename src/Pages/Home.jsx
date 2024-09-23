import { useState } from 'react'
import '../App.css'
import Header from '../components/Header/Header'
import Welcome from '../components/Body/Welcome'
import Prop from '../components/Body/Prop'
import Explain from '../components/Body/Explain'
import Fooder from '../components/Fooder/Fooder'
function Home() {
  const props = [
    {
      title: "Оновчтой, зөв",
      p1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.",
      imgUrl: '/img2.png'
    },
    {
      title: "Цагтаа багтаах",
      p1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.",
      imgUrl: '/img3.png'
    },
    {
      title: "Бодолт харах",
      p1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.",
      imgUrl: '/img4.png'
    },
    {
      title: "Бүртгэлээ үүсгэх",
      p1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.",
      imgUrl: '/img5.png'
    }
  ]
  return (
    <div class="flex min-h-100vh flex-col" className='body'>
    <Header />
    <Welcome />
    <div class="flex flex-row mt-96">
      {
        props.map((data)=>{
          return <Prop title={data.title} p1={data.p1} img={data.imgUrl}/>
        })
      }
    </div>
    <div class="border-b-black w-full border-solid border-2 mt-12"></div>
    <Explain/>
    <div class="border-b-black w-full border-solid border-2 mt-12"></div>
    <Fooder/>
    </div>
  )
}

export default Home
