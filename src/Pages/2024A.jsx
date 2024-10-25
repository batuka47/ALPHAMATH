import { useState } from 'react'
import '../App.css'
import Header from '../components/Header/Header'
import Fooder from '../components/Fooder/Fooder'
import Task1 from '../components/Body/Task1'
import Task2 from '../components/Body/Task2'
function EYSH(){
    return (
       <div className='body' class="flex items-center  min-h-100vh flex-col"  width="1200px">
        <Header/>
        <div class="w-full flex flex-col ">
            <div class="w-full flex flex-col items-center">
                <div class="border-b-solid border-b-4 border-black w-full flex flex-row justify-between ">
                    <h1 class="font-bold text-2xl">2024он</h1>
                    <h1 class="font-bold text-2xl">Хувилбар А</h1>
                </div>
                <h1 class="font-bold text-2xl mt-8">Нэгдүгээр хэсэг. СОНГОХ ДААЛГАВАР</h1>
                <p  class="font-semibold text-xl">
                    <span class="text-red-600">Санамж:</span> Нэгдүгээр хэсгийн 36 сонгох даалгавар нь нийт 72 оноотой. Даалгавар тус
                    <br /> бүр 5 сонгох хариулттай. Тэдгээрийн зөвхөн нэг зөв хариултыг сонгож, хариултын 
                    <br /> хуудсанд будажтэмдэглээрэй. Зураг бодит хэмжээгээр өгөгдөөгүй гэдгийг санаарай.
                </p>
            </div>
            <h3 class="font-bold text-xl mt-8">
                Бодлого 1-ээс 8 тус бүр 1 оноотой. 
            </h3>
            
            <Task1/>

            <h3 class="font-bold text-xl mt-8">
                Бодлого 9-өөс 28 тус бүр 2 оноотой. 
            </h3>
            <Task2/>
       </div>
        <Fooder/>
       </div>
    )
}
export default EYSH