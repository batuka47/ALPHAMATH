import { useState } from 'react'
import { Link } from 'react-router-dom'
import RadioButton from './RadioBtn'
function Task1(props){
    const [selectedValue, setSelectedValue] = useState('HTML');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
    return (
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
            <p class="font-semibold text-xl" >
                1. 4-т хуваагдах тоог олоорой
            </p>
            <div className="p-4 gap-12">
                <RadioButton
                    label="A. 2418 "
                    name="language"
                    value="A. 2418 "
                    checked={selectedValue === 'A. 2418 '}
                    onChange={handleChange}
                />
                <RadioButton
                    label="B. 5834"
                    name="language"
                    value="B. 5834"
                    checked={selectedValue === 'B. 5834'}
                    onChange={handleChange}
                />
                <RadioButton
                    label="C. 6430"
                    name="language"
                    value="C. 6430"
                    checked={selectedValue === 'C. 6430'}
                    onChange={handleChange}
                />
                <RadioButton
                    label="D. 4862"
                    name="language"
                    value="D. 4862"
                    checked={selectedValue === 'D. 4862'}
                    onChange={handleChange}
                />
                <RadioButton
                    label="E. 1356"
                    name="language"
                    value="E. 1356"
                    checked={selectedValue === 'E. 1356'}
                    onChange={handleChange}
                />
            </div>
            <p class="font-semibold text-xl" >
            2. Нэг шагайг 2 удаа орхиход хонь буусан тоог 𝑋 <br/>
                санамсаргүй хувьсагчаар сонгож, магадлалын <br />
                тархалтыг баганан диаграммаар үзүүлэв. 𝑃(𝑋 ≥ 1) <br />
                магадлалыг ол. 
            </p>
            <div className="p-4 gap-12">
                <RadioButton
                    label="A. 2418 "
                    name="language"
                    value="A. 2418 "
                    checked={selectedValue === 'A. 2418 '}
                    onChange={handleChange}
                />
                <RadioButton
                    label="B. 5834"
                    name="language"
                    value="B. 5834"
                    checked={selectedValue === 'B. 5834'}
                    onChange={handleChange}
                />
                <RadioButton
                    label="C. 6430"
                    name="language"
                    value="C. 6430"
                    checked={selectedValue === 'C. 6430'}
                    onChange={handleChange}
                />
                <RadioButton
                    label="D. 4862"
                    name="language"
                    value="D. 4862"
                    checked={selectedValue === 'D. 4862'}
                    onChange={handleChange}
                />
                <RadioButton
                    label="E. 1356"
                    name="language"
                    value="E. 1356"
                    checked={selectedValue === 'E. 1356'}
                    onChange={handleChange}
                />
            </div>
       </div>
    )
}
export default Task1