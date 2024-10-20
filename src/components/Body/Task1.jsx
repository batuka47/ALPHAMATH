import { useState } from 'react'
import { Link } from 'react-router-dom'
import RadioButton from './RadioBtn'
import parse from 'html-react-parser';
function Task1(props){
    const [selectedValue, setSelectedValue] = useState('');

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
                    label="2418"
                    name="question1"
                    value="A"
                    checked={selectedValue === 'A'}
                    onChange={handleChange}
                />
                <RadioButton
                    label="5834"
                    name="question1"
                    value="B"
                    checked={selectedValue === 'B'}
                    onChange={handleChange}
                />
                <RadioButton
                    label="6430"
                    name="question1"
                    value="C"
                    checked={selectedValue === 'C'}
                    onChange={handleChange}
                />
                <RadioButton
                    label="4862"
                    name="question1"
                    value="D"
                    checked={selectedValue === 'D'}
                    onChange={handleChange}
                />
                <RadioButton
                    label="1356"
                    name="question1"
                    value="E"
                    checked={selectedValue === 'E'}
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
                    label='<p>
                            <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac>
                            <mn>21</mn><mn>25</mn></mfrac><annotation encoding="application/x-tex">\frac{21}{25}
                            </annotation></semantics></math></em>
                            </p>'
                    name="question2"
                    value="A"        
                    checked={selectedValue === 'A'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='<p>
                            <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac>
                            <mn>12</mn><mn>25</mn></mfrac><annotation encoding="application/x-tex">\frac{12}{25}
                            </annotation></semantics></math></em>
                            </p>'
                    name="question2"
                    value="B" 
                    checked={selectedValue === 'B'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='<p>
                            <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac>
                            <mn>4</mn><mn>25</mn></mfrac><annotation encoding="application/x-tex">\frac{4}{25}
                            </annotation></semantics></math></em>
                            </p>'
                    name="question2"
                    value="C" 
                    checked={selectedValue === 'C'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='<p>
                            <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac>
                            <mn>16</mn><mn>25</mn></mfrac><annotation encoding="application/x-tex">\frac{16}{25}
                            </annotation></semantics></math></em>
                            </p>'
                    name="question2"
                    value="D" 
                    checked={selectedValue === 'D'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='<p>
                            <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac>
                            <mn>9</mn><mn>25</mn></mfrac><annotation encoding="application/x-tex">\frac{9}{25}
                            </annotation></semantics></math></em>
                            </p>'
                    name="question2"
                    value="E" 
                    checked={selectedValue === 'E'}
                    onChange={handleChange}
                />
            </div>
            <p className="font-semibold text-xl flex flex-row gap-2">
                3. {parse(`<p><em><math display="block" class="w-24 font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>4</mn><mn>9</mn></mfrac><mi>x</mi><mo>+</mo><mn>1</mn><mfrac><mn>5</mn><mn>6</mn></mfrac><mo>=</mo><mn>2</mn></mrow><annotation encoding="application/x-tex">\frac{4}{9}x+1\frac{5}{6}=2</annotation></semantics></math></em></p>`)}
                тэгшитгэл бод.
            </p>
            <div className="p-4 gap-12">
                <RadioButton
                    label=' <p class="flex">
                            -2<em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>5</mn><mn>8</mn></mfrac><annotation encoding="application/x-tex">\frac{5}{8}</annotation></semantics></math></em>
                            </p>'
                    checked={selectedValue === 'A'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='<p class="flex">
                            <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>5</mn><mn>8</mn></mfrac><annotation encoding="application/x-tex">\frac{5}{8}</annotation></semantics></math></em>
                            </p>'
                    checked={selectedValue === 'B'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='<p class="flex">
                            <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>3</mn><mn>8</mn></mfrac><annotation encoding="application/x-tex">\frac{3}{8}</annotation></semantics></math></em>
                            </p>'
                    checked={selectedValue === 'C'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='<p class="flex">
                            2<em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>5</mn><mn>8</mn></mfrac><annotation encoding="application/x-tex">\frac{5}{8}</annotation></semantics></math></em>
                            </p>'
                    checked={selectedValue === 'D'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='<p class="flex">
                            4<em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>1</mn><mn>24</mn></mfrac><annotation encoding="application/x-tex">\frac{1}{24}</annotation></semantics></math></em>
                            </p>'
                    checked={selectedValue === 'E'}
                    onChange={handleChange}
                />
            </div>
            <p class="font-semibold text-xl flex flex-row" >
                4. Үйлдлийг гүйцэтгэ. {parse('<p><em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mroot><msup><mn>4</mn><mn>2</mn></msup><mn>3</mn></mroot><mo>*</mo><msup><mn>2</mn><mfrac><mn>2</mn><mn>3</mn></mfrac></msup></mrow><annotation encoding="application/x-tex">\sqrt[3]{4^2}*2^\frac{2}{3}</annotation></semantics></math></em></p>')}
            </p>
            <div className="p-4 gap-12">
                <RadioButton
                    label='4'
                    checked={selectedValue === 'A'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='<p><em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><msup><mn>2</mn><mfrac><mn>3</mn><mn>8</mn></mfrac></msup><annotation encoding="application/x-tex">2^\frac{3}{8}</annotation></semantics></math></em></p>'
                    checked={selectedValue === 'B'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='<p><em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><msup><mn>2</mn><mfrac><mn>5</mn><mn>3</mn></mfrac></msup><annotation encoding="application/x-tex">2^\frac{5}{3}</annotation></semantics></math></em></p>'
                    checked={selectedValue === 'C'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='<p><em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><msup><mn>2</mn><mfrac><mn>11</mn><mn>3</mn></mfrac></msup><annotation encoding="application/x-tex">2^\frac{11}{3}</annotation></semantics></math></em></p>'
                    checked={selectedValue === 'D'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='8'
                    checked={selectedValue === 'E'}
                    onChange={handleChange}
                />
            </div>
            <p class="font-semibold text-xl flex flex-row" >
                5. Зурагт үзүүлсэн 𝑂 цэгт төвтэй тойргийн шүргэгч 𝐵𝐴 <br />
                бөгөөд 𝐵O хэрчим тойргийг 𝐶 цэгт огтлов. Хэрэв <br />
                ∠𝐴𝑂𝐵 = 70° бол 𝐵A𝐶 өнцгийг ол. 
            </p>
            <div className="p-4 gap-12">
                <RadioButton
                    label='35°'
                    checked={selectedValue === 'A'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='20°'
                    checked={selectedValue === 'B'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='30°'
                    checked={selectedValue === 'C'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='55°'
                    checked={selectedValue === 'D'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='70°'
                    checked={selectedValue === 'E'}
                    onChange={handleChange}
                />
            </div>
            <p class="font-semibold text-xl flex flex-row" >
                6. 2 улаан, 3 цагаан, 4 хөх өнгийн бөмбөгнүүдээс өнгө нь <br />
                ялгаатай 2 бөмбөгийг хэдэн янзаар сонгож болох вэ?
            </p>
            <div className="p-4 gap-12">
                <RadioButton
                    label='12'
                    checked={selectedValue === 'A'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='24'
                    checked={selectedValue === 'B'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='18'
                    checked={selectedValue === 'C'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='26'
                    checked={selectedValue === 'D'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='13'
                    checked={selectedValue === 'E'}
                    onChange={handleChange}
                />
            </div>
            <p class="font-semibold text-xl flex flex-row" >
                Зурагт өгсөн параллелепипедээс <br /> вектортэй тэнцүү векторыг ол{parse('<p><em><math display="block" class="font-semibold w-20" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mover><mrow><mi>B</mi><mi>G</mi></mrow><mo accent="true">→</mo></mover><mo>−</mo><mover><mrow><mi>A</mi><mi>E</mi></mrow><mo accent="true">→</mo></mover></mrow><annotation encoding="application/x-tex">\overrightarrow{BG}-\overrightarrow{AE}</annotation></semantics></math></em></p>')} ялгавар
            </p>
            <div className="p-4 gap-12">
                <RadioButton
                    label='<p>
                            <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mover><mrow><mi>A</mi><mi>B</mi></mrow><mo accent="true">→</mo></mover><annotation encoding="application/x-tex">\overrightarrow{AB}</annotation></semantics></math></em>
                            </p>'
                    checked={selectedValue === 'A'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='<p>
                            <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mover><mrow><mi>C</mi><mi>B</mi></mrow><mo accent="true">→</mo></mover><annotation encoding="application/x-tex">\overrightarrow{CB}</annotation></semantics></math></em>
                            </p>'
                    checked={selectedValue === 'B'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='<p>
                            <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mover><mrow><mi>E</mi><mi>H</mi></mrow><mo accent="true">→</mo></mover><annotation encoding="application/x-tex">\overrightarrow{EH}}</annotation></semantics></math></em>
                            </p>'
                    checked={selectedValue === 'C'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='<p>
                            <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mover><mrow><mi>E</mi><mi>G</mi></mrow><mo accent="true">→</mo></mover><annotation encoding="application/x-tex">\overrightarrow{EG}</annotation></semantics></math></em>
                            </p>'
                    checked={selectedValue === 'D'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='<p>
                            <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mover><mrow><mi>B</mi><mi>E</mi></mrow><mo accent="true">→</mo></mover><annotation encoding="application/x-tex">\overrightarrow{BE}</annotation></semantics></math></em>
                            </p>'
                    checked={selectedValue === 'E'}
                    onChange={handleChange}
                />
            </div>
            <p class="font-semibold text-xl flex flex-row" >
                8. 𝑦 = ln 5𝑥 − 2𝑥 функцийн уламжлалыг ол
            </p>
            <div className="p-4 gap-12">
                <RadioButton
                    label='<p>
                            <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>5</mn><mi>x</mi></mfrac><mo>−</mo><mn>2</mn></mrow><annotation encoding="application/x-tex">\frac{5}{x}-2</annotation></semantics></math></em>
                            </p>'
                    checked={selectedValue === 'A'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='<p>
                            <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mi>x</mi></mfrac><mo>−</mo><mn>2</mn></mrow><annotation encoding="application/x-tex">\frac{1}{x}-2</annotation></semantics></math></em>
                            </p>'
                    checked={selectedValue === 'B'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='<p>
                            <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mi>5x</mi></mfrac><mo>−</mo><mn>2</mn></mrow><annotation encoding="application/x-tex">\frac{1}{5x}-2x</annotation></semantics></math></em>
                            </p>'
                    checked={selectedValue === 'C'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='<p>
                            <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mi>x</mi></mfrac><mo>−</mo><mn>2</mn></mrow><annotation encoding="application/x-tex">\frac{1}{x}-2x</annotation></semantics></math></em>
                            </p>'
                    checked={selectedValue === 'D'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='<p>
                            <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mi>5x</mi></mfrac><mo>−</mo><mn>2</mn></mrow><annotation encoding="application/x-tex">\frac{1}{5x}-2</annotation></semantics></math></em>
                            </p>'
                    checked={selectedValue === 'E'}
                    onChange={handleChange}
                />
            </div>
            <h3 class="font-bold text-xl mt-8">
                Бодлого 9-өөс 28 тус бүр 2 оноотой. 
            </h3>
            <p class="font-semibold text-xl flex flex-row" >
            9. Химийн лабораторт байгаа нэг ширхэг бодисын жин <br />мг бол 3000 ширхэг ийм бодисын нийт жинг
                олоорой.{parse('<p><em><math display="block" class="w-20 font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>5</mn><mo>*</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup></mrow><annotation encoding="application/x-tex">5*10^{-7}</annotation></semantics></math></em></p>')} 
                
            </p>
            <div className="p-4 gap-12">
                <RadioButton
                    label='0.15 мг'
                    checked={selectedValue === 'A'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='0.015 мг'
                    checked={selectedValue === 'B'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='1.5 мг'
                    checked={selectedValue === 'C'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='0.0015 мг'
                    checked={selectedValue === 'D'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='8'
                    checked={selectedValue === 'E'}
                    onChange={handleChange}
                />
            </div>
            <p class="font-semibold text-xl flex flex-row" >
                
            </p>
            <div className="p-4 gap-12">
                <RadioButton
                    label='4'
                    checked={selectedValue === 'A'}
                    onChange={handleChange}
                />
                <RadioButton
                    label=''
                    checked={selectedValue === 'B'}
                    onChange={handleChange}
                />
                <RadioButton
                    label=''
                    checked={selectedValue === 'C'}
                    onChange={handleChange}
                />
                <RadioButton
                    label=''
                    checked={selectedValue === 'D'}
                    onChange={handleChange}
                />
                <RadioButton
                    label='8'
                    checked={selectedValue === 'E'}
                    onChange={handleChange}
                />
            </div>
       </div>
    )
}
export default Task1