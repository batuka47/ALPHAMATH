import { useState } from 'react';
import '../App.css';
import Header from '../components/Header/Header';
import Fooder from '../components/Fooder/Fooder';
import Task1 from '../components/Body/Task1';
import Task2 from '../components/Body/Task2';
import Task3 from '../components/Body/Task3';

function EYSH() {
    return (
        <div className='body flex items-center min-h-screen flex-col' style={{ width: "1200px" }}>

                <Header />

            <main className="w-full flex flex-col">
                <div className="w-full flex flex-col items-center">
                    <div className="border-b-4 border-black w-full flex flex-row justify-between">
                        <h1 className="font-bold text-2xl">2024 он</h1>
                        <h1 className="font-bold text-2xl">Хувилбар А</h1>
                    </div>
                    <h1 className="font-bold text-2xl mt-8">Нэгдүгээр хэсэг. СОНГОХ ДААЛГАВАР</h1>
                    <p className="font-semibold text-xl">
                        <span className="text-red-600">Санамж:</span> Нэгдүгээр хэсгийн 36 сонгох даалгавар нь нийт 72 оноотой. Даалгавар тус
                        <br /> бүр 5 сонгох хариулттай. Тэдгээрийн зөвхөн нэг зөв хариултыг сонгож, хариултын 
                        <br /> хуудсанд будаж тэмдэглээрэй. Зураг бодит хэмжээгээр өгөгдөөгүй гэдгийг санаарай.
                    </p>
                </div>
                <h3 className="font-bold text-xl mt-8">Бодлого 1-ээс 8 тус бүр 1 оноотой.</h3>
                <Task1 />
                <h3 className="font-bold text-xl mt-8">Бодлого 9-өөс 28 тус бүр 2 оноотой.</h3>
                <Task2 />
                <h3 className="font-bold text-xl mt-8">Бодлого 29-өөс 36 тус бүр 3 оноотой.</h3>
                <Task3 />
            </main>

                <Fooder />

        </div>
    );
}

export default EYSH;
