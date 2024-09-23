import {useState, useEffect} from 'react';
import Logo from '../../assets/logo';
import { Link } from 'react-router-dom';
function Header(){



    const newDate = new Date(2023, 0, 1, 0, 0, 0);
    const [date, setDate] = useState(new Date());

    return (
        <div className='Con' class="flex flex-row justify-between items-center w-full h-16 ">
            <div className='logo' class="w-3/25 flex content-center items-center">
                <Logo/>
            </div>
            <div className='BtnCon' class="w-3/5 flex flex-row gap-8 items-center">
                <button class="h-8 min-w-20 border-none text-stone-950  bg-white text-xl font-semibold flex justify-center items-center gap-1">Нүүр</button>
                <button class="h-8 min-w-20 border-none text-stone-950  bg-white text-xl font-semibold flex justify-center items-center gap-1">Материал</button>
                <Link to="/EYSH">
                    <button class="h-8 min-w-20 border-none text-stone-950  bg-white text-xl font-semibold flex justify-center items-center gap-1">ЭЕШ</button>
                </Link>
                <button class="h-8 min-w-20 border-none text-stone-950  bg-white text-xl font-semibold flex justify-center items-center gap-1">Бидний тухай</button>
            </div>
                <div className='date' class="w-1/10 flex flex-row justify-center items-center font-bold">
                    {date.toLocaleString()}
                </div>
        </div>
    )
}

export default Header