import {useState, useEffect} from 'react';
import Logo from '../../assets/logo';
function Fooder(){

    return (
        <div class="flex flex-row justify-between items-center w-full h-32 ">
            <div className='logo' class="w-1/6 flex content-center items-center">
                <Logo/>
            </div>
            <div class="w-5/6 flex flex-row justify-between items-center">
                <button class="h-12 min-w-20 border-none text-stone-95 rounded-3xl bg-gradient-to-r from-violet-700 to-emerald-400 text-lg font-medium flex justify-center items-center gap-1">Бидний тухай</button>
                <button class="h-12 min-w-20 border-none text-stone-95 rounded-3xl bg-gradient-to-r from-violet-700 to-emerald-400 text-lg font-medium flex justify-center items-center gap-1">Сурталчилгаа байршуулах</button>
                <button class="h-12 min-w-20 border-none text-stone-95 rounded-3xl bg-gradient-to-r from-violet-700 to-emerald-400 text-lg font-medium flex justify-center items-center gap-1">Редакцийн ёс зүй</button>
                <button class="h-12 min-w-20 border-none text-stone-95 rounded-3xl bg-gradient-to-r from-violet-700 to-emerald-400 text-lg font-medium flex justify-center items-center gap-1">Нууцлалын бодлого</button>
                <button class="h-12 min-w-20 border-none text-stone-95 rounded-3xl bg-gradient-to-r from-violet-700 to-emerald-400 text-lg font-medium flex justify-center items-center gap-1">Холбоо барих</button>
            </div>
        </div>
    )
}

export default Fooder