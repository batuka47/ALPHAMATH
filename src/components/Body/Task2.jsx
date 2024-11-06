import { useState } from 'react'
import Test from './Test';
import parse from 'html-react-parser';
function Task2(prop){
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
    const props = [
        {
            id: "9",
            text:`<p>
                Химийн лабораторт байгаа нэг ширхэг бодисын жин <br />мг бол 3000 ширхэг ийм бодисын нийт жинг
                олоорой.<p><em><math display="block" class="w-20 font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>5</mn><mo>*</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup></mrow><annotation encoding="application/x-tex">5*10^{-7}</annotation></semantics></math></em></p>  
                </p>`,
            labelA:`0.15 мг`,
            labelB:`0.015 мг`,
            labelC:`1.5 мг`,
            labelD:`0.0015 мг`,
            labelE:`15 мг`
        },
        {
            id: "10",
            text:`<p>360 -ын <br /> олоорой.
            <p class="h-14"><em><math display="block" class="w-10 font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>5</mn><mn>24</mn></mfrac><annotation encoding="application/x-tex">\frac{5}{24}</annotation></semantics></math></em></p> <span class="h-14">хэсэг нь 𝑥𝑥 тооны -тай тэнцүү бол 𝑥𝑥 тоог</span>
            <p class="h-14"><em><math display="block" class="w-10 font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>5</mn><mn>8</mn></mfrac><annotation encoding="application/x-tex">\frac{5}{8}</annotation></semantics></math></em></p>
            </p>`,
            labelA:`285`,
            labelB:`<p class="flex">
                    46<em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>7</mn><mn>8</mn></mfrac><annotation encoding="application/x-tex">\frac{7}{8}</annotation></semantics></math></em>
                    </p>`,
            labelC:`<p class="flex">
                    <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>1</mn><mn>120</mn></mfrac><annotation encoding="application/x-tex">\frac{1}{120}</annotation></semantics></math></em>
                    </p>`,
            labelD:`200`,
            labelE:`120`
        },
        {
            id: "11",
            text:`<p>
                <em><math display="block" class="w-56 font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>x</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn></mrow></mfrac><mo>*</mo><mfrac><mrow><mi>x</mi><mo>+</mo><mn>2</mn></mrow><mi>x</mi></mfrac><mo>−</mo><mfrac><mrow><mi>x</mi><mo>+</mo><mn>3</mn></mrow><mrow><mn>2</mn><mi>x</mi><mo>−</mo><mn>4</mn></mrow></mfrac></mrow><annotation encoding="application/x-tex">\frac{x^{2}+3x}{x^{2}-4}*\frac{x+2}{x}-\frac{x+3}{2x-4}</annotation></semantics></math></em>
                </p>илэрхийллийг хялбарчил.`,
            labelA:`<p>
                    <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mrow><mi>x</mi><mo>+</mo><mn>3</mn></mrow><mrow><mn>2</mn><mrow><mo stretchy="true" form="prefix">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy="true" form="postfix">)</mo></mrow></mrow></mfrac><annotation encoding="application/x-tex">\frac{x+3}{2(x-2)}</annotation></semantics></math></em>
                    </p>`,
            labelB:`<p>
                    <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mrow><mi>x</mi><mo>+</mo><mn>9</mn></mrow><mrow><mn>2</mn><mrow><mo stretchy="true" form="prefix">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy="true" form="postfix">)</mo></mrow></mrow></mfrac><annotation encoding="application/x-tex">\frac{x+9}{2(x-2)}</annotation></semantics></math></em>
                    </p>`,
            labelC:`<p>
                    <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow><mrow><mi>x</mi><mo>−</mo><mn>2</mn></mrow></mfrac><annotation encoding="application/x-tex">\frac{x+1}{x-2}</annotation></semantics></math></em>
                    </p>`,
            labelD:`<p>
                    <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>6</mn><mrow><mi>−</mi><mi>x</mi><mo>+</mo><mn>2</mn></mrow></mfrac><annotation encoding="application/x-tex">\frac{6}{-x+2}</annotation></semantics></math></em>
                    </p>`,
            labelE:`<p>
                    <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mrow><mi>2x</mi><mo>+</mo><mn>3</mn></mrow><mrow><mn>-2</mn><mrow><mo stretchy="true" form="prefix">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy="true" form="postfix">)</mo></mrow></mrow></mfrac><annotation encoding="application/x-tex">\frac{2x+3}{-2(x-2)}</annotation></semantics></math></em>
                    </p>`
        },
        {
            id: "12",
            text:`Зурагт өгсөн ABC гурвалжны AN = 9, BM = 12 байх <br/>
            медианууд перпендикуляр ба O цэгт огтлолцох бол <br/>
            ONCM дөрвөн өнцөгтийн талбайг ол.`,
            labelA:`24`,
            labelB:`18`,
            labelC:`28.8`,
            labelD:`13.5`,
            labelE:`27`
        },
        {
            id: "13",
            text:`tg 𝛼 = −1, 90° < 𝛼 < 180° бол cos 𝛼 -ийн утгыг ол`,
            labelA:`<p>
                    <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>1</mn><mn>2</mn></mfrac><annotation encoding="application/x-tex">\frac{1}{2}</annotation></semantics></math></em>
                    </p>`,
            labelB:`<p>
                    <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><annotation encoding="application/x-tex">\frac{\sqrt{2}}{2}</annotation></semantics></math></em>
                    </p>`,
            labelC:`<p class="flex">
                    -<em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><annotation encoding="application/x-tex">\frac{\sqrt{2}}{2}</annotation></semantics></math></em>
                    </p>`,
            labelD:`<p class="flex">
                    -<em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><annotation encoding="application/x-tex">\frac{\sqrt{3}}{2}</annotation></semantics></math></em>
                    </p>`,
            labelE:`<p class="flex">
                    -<em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>1</mn><mn>2</mn></mfrac><annotation encoding="application/x-tex">\frac{1}{2}</annotation></semantics></math></em>
                    </p>`
        },
        {
            id: "14",
            text:`Координатын хавтгайд 𝐴(−5, −2), 𝐵(5, 4), 𝐶(2, 𝑎)<br/>
                    гурван цэг нэг шулуун дээр байх бол 𝑎 тоог ол.`,
            labelA:`2.18`,
            labelB:`2.25`,
            labelC:`2.6`,
            labelD:`2.2`,
            labelE:`2.3`
        },
        {
            id: "15",
            text:`<p>
                    <em><math display="block" class="font-semibold w-28" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msubsup><mo>∫</mo><mn>1</mn><mn>8</mn></msubsup><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><msqrt><mrow><mn>3</mn><mi>x</mi><mo>+</mo><mn>1</mn></mrow></msqrt></mfrac></mrow><annotation encoding="application/x-tex">\int_{1}^{8} \frac{dx}{\sqrt{3x+1}}</annotation></semantics></math></em>
                    </p>тодорхой интеграл бод.`,
            labelA:`<p>
                    <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>3</mn><mn>10</mn></mfrac><annotation encoding="application/x-tex">\frac{3}{10}</annotation></semantics></math></em>
                    </p>`,
            labelB:`6`,
            labelC:`<p>
                    <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>1</mn><mn>2</mn></mfrac><annotation encoding="application/x-tex">\frac{1}{2}</annotation></semantics></math></em>
                    </p>`,
            labelD:`26`,
            labelE:`2`
        },
        {
            id: "16",
            text:`<p class="">
                    <em><math display="block" class="font-semibold w-32" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>z</mi><mn>2</mn></msup><mo>+</mo><mn>4</mn><mi>z</mi><mo>+</mo><mn>40</mn></mrow><annotation encoding="application/x-tex">z^{2}+4z+40</annotation></semantics></math></em>
                    комплекс тоог ол</p> <span class="h-12 ml-[-36px]">ба хуурмаг хэсэг нь эерэг байх 𝑧</span>`,
            labelA:`<p>
                    <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>−</mi><mn>2</mn><mo>+</mo><mn>6</mn><mi>i</mi></mrow><annotation encoding="application/x-tex">-2 +6i</annotation></semantics></math></em>
                    </p>`,
            labelB:`<p>
                    <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>±</mi><mn>2</mn><mo>+</mo><mn>6</mn><mi>i</mi></mrow><annotation encoding="application/x-tex">\pm2+6i</annotation></semantics></math></em>
                    </p>`,
            labelC:`<p>
                    <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>−</mi><mn>2</mn><mo>±</mo><mn>6</mn><mi>i</mi></mrow><annotation encoding="application/x-tex">-2 \pm6i</annotation></semantics></math></em>
                    </p>`,
            labelD:`<p>
                    <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>2</mn><mo>-</mo><mn>6</mn><mi>i</mi></mrow><annotation encoding="application/x-tex">2 -6i</annotation></semantics></math></em>
                    </p>`,
            labelE:`<p>
                    <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>2</mn><mo>+</mo><mn>6</mn><mi>i</mi></mrow><annotation encoding="application/x-tex">2 +6i</annotation></semantics></math></em>
                    </p>`
        },
        {
            id: "17",
            text:`𝑋𝑋 санамсаргүй хувьсагчийн магадлалын тархалтыг <br/>
                    хүснэгтээр харуулав. Математик дундаж 𝐸(𝑋) = 1.2 бол <br/>
                    𝑝1, 𝑝2 магадлалын хувьд аль хамаарал үнэн бэ?`,
            labelA:`𝑝1 − 𝑝2 = 0.6`,
            labelB:`𝑝1 < 𝑝2`,
            labelC:`𝑝2 − 𝑝1 = 0.4`,
            labelD:`𝑝2 = 4𝑝1`,
            labelE:`𝑝1 ∙ 𝑝2 = 1`
        },
        {
            id: "18",
            text:`Нэг цэгт төвтэй 4 ба 6 радиустай хоёр дугуйг дөрвөн <br/>
                    тэнцүү хуваах диаметр татаж, хуваагдсан зарим хэсгийг <br/>
                    будав. Том дугуйгаас санамсаргүй сонгосон цэг будсан <br/>
                    хэсэгт байх магадлалыг ол`,
            labelA:`<p>
                    <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>5</mn><mn>36</mn></mfrac><annotation encoding="application/x-tex">\frac{5}{36}</annotation></semantics></math></em>
                    </p>`,
            labelB:`<p>
                    <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>5</mn><mn>9</mn></mfrac><annotation encoding="application/x-tex">\frac{5}{9}</annotation></semantics></math></em>
                    </p>`,
            labelC:`<p>
                    <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>5</mn><mn>18</mn></mfrac><annotation encoding="application/x-tex">\frac{5}{18}</annotation></semantics></math></em>
                    </p>`,
            labelD:`<p>
                    <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>1</mn><mn>4</mn></mfrac><annotation encoding="application/x-tex">\frac{1}{4}</annotation></semantics></math></em>
                    </p>`,
            labelE:`<p>
                    <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>1</mn><mn>6</mn></mfrac><annotation encoding="application/x-tex">\frac{1}{6}</annotation></semantics></math></em>
                    </p>`
        },
        {
            id: "19",
            text:`<p>
                <em><math display="block" class="font-semibold w-[180px]" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>s</mi><mi>i</mi><mi>n</mi><mi>x</mi><mo>−</mo><mi>s</mi><mi>i</mi><mi>n</mi><mn>3</mn><mi>x</mi></mrow><annotation encoding="application/x-tex">\frac{dy}{dx}=sinx-sin3x</annotation></semantics></math></em>
                </p> байх
                <p>
                <em><math display="block" class="font-semibold w-28" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ℳ</mi><mrow><mo stretchy="true" form="prefix">(</mo><mfrac><mi>π</mi><mn>3</mn></mfrac><mo>;</mo><mfrac><mrow><mi>−</mi><mn>1</mn></mrow><mn>3</mn></mfrac><mo stretchy="true" form="postfix">)</mo></mrow></mrow><annotation encoding="application/x-tex">\mathcal{M} \left( \frac{\pi}{3} ; \frac{-1}{3} \right)</annotation></semantics></math></em>
                </p>цэгийг дайрах муруйг
                олоорой.`,
            labelA:`<p>
            <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mo>cos</mo><mrow><mn>3</mn><mi>x</mi></mrow></mrow><mn>3</mn></mfrac><mo>+</mo><mo>cos</mo><mrow><mi>x</mi></mrow><mo>−</mo><mfrac><mn>7</mn><mn>6</mn></mfrac></mrow><annotation encoding="application/x-tex">y=-\frac{\cos\left.3x\right.}{3} +\cos\left.x\right.- \frac{7}{6}</annotation></semantics></math></em></p>
        </p>`,
            labelB:`<p>
            <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mo>cos</mo><mrow><mn>3</mn><mi>x</mi></mrow></mrow><mn>3</mn></mfrac><mo>−</mo><mo>cos</mo><mrow><mi>x</mi></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow><annotation encoding="application/x-tex">y=-\frac{\cos\left.3x\right.}{3} +\cos\left.x\right.- \frac{7}{6}</annotation></semantics></math></em></p>
        </p>`,
            labelC:`<p>
            <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mo>cos</mo><mrow><mn>3</mn><mi>x</mi></mrow></mrow><mn>3</mn></mfrac><mo>−</mo><mo>cos</mo><mrow><mi>x</mi></mrow><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow><annotation encoding="application/x-tex">y=-\frac{\cos\left.3x\right.}{3} +\cos\left.x\right.- \frac{7}{6}</annotation></semantics></math></em></p>
        </p>`,
            labelD:`<p>
            <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mo>cos</mo><mrow><mn>3</mn><mi>x</mi></mrow></mrow><mn>3</mn></mfrac><mo>+</mo><mo>cos</mo><mrow><mi>x</mi></mrow><mo>−</mo><mfrac><mn>5</mn><mn>6</mn></mfrac></mrow><annotation encoding="application/x-tex">y=-\frac{\cos\left.3x\right.}{3} +\cos\left.x\right.- \frac{7}{6}</annotation></semantics></math></em></p>
        </p>`,
            labelE:`<p>
            <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mo>cos</mo><mrow><mn>3</mn><mi>x</mi></mrow></mrow><mn>3</mn></mfrac><mo>−</mo><mo>cos</mo><mrow><mi>x</mi></mrow><mo>−</mo><mfrac><mn>1</mn><mn>6</mn></mfrac></mrow><annotation encoding="application/x-tex">y=-\frac{\cos\left.3x\right.}{3} +\cos\left.x\right.- \frac{7}{6}</annotation></semantics></math></em></p>
        </p>`
        },
        {
            id: "20",
            text:`Барааны үнэ байгаа үнээсээ хоёр удаа дараалан тэнцүү <br/>
                    хэдэн хувиар өсөхөд анхны үнээс 12.36% -иар өссөн <br/>
                    байх вэ?`,
            labelA:`6.18%`,
            labelB:`6%`,
            labelC:`6.2%`,
            labelD:`6.25%`,
            labelE:`5%`
        },
        {
            id: "21",
            text:`<p>
                <em><math display="block" class="font-semibold w-4 h-4 mb-8" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><msup><mi>x</mi><mn>2</mn></msup><annotation encoding="application/x-tex">x^{2}</annotation></semantics></math></em>
                </p>− 3𝑥𝑥 < 0 ба 2 − 𝑥𝑥 ≥ 0 тэнцэтгэл бишүүдийг нэгэн <br/>
                зэрэг хангах шийдийн олонлогийг ол.`,
            labelA:`]−∞, 0]`,
            labelB:`]−∞, 0]`,
            labelC:`]0, 3[`,
            labelD:`]0, 2]`,
            labelE:`]−∞, 0[ ∪ [2, 3[`
        },
        {
            id: "22",
            text:`Талсууд дээр нь 1, 2, 3, 4, 5, 6 тоонуудыг нэг нэгээр нь <br/>
                    бичсэн хоёр шоог орхиход буусан тоонуудын үржвэр 4-т <br/>
                    хуваагдах магадлалыг ол.`,
            labelA:`<p>
                    <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>7</mn><mn>12</mn></mfrac><annotation encoding="application/x-tex">\frac{7}{12}</annotation></semantics></math></em>
                    </p>`,
            labelB:`<p>
                    <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>4</mn><mn>9</mn></mfrac><annotation encoding="application/x-tex">\frac{4}{9}</annotation></semantics></math></em>
                    </p>`,
            labelC:`<p>
                    <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>11</mn><mn>18</mn></mfrac><annotation encoding="application/x-tex">\frac{11}{18}</annotation></semantics></math></em>
                    </p>`,
            labelD:`<p>
                    <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>7</mn><mn>18</mn></mfrac><annotation encoding="application/x-tex">\frac{7}{18}</annotation></semantics></math></em>
                    </p>`,
            labelE:`<p>
                    <em><math display="block" class="font-semibold" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>5</mn><mn>12</mn></mfrac><annotation encoding="application/x-tex">\frac{5}{12}</annotation></semantics></math></em>
                    </p>`
        },
        {
            id: "23",
            text:`<p>
                <em><math display="block" class="font-semibold w-28" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mi>c</mi><mi>x</mi><mo>+</mo><mn>3</mn></mrow><mrow><mi>x</mi><mo>+</mo><mi>b</mi></mrow></mfrac></mrow><annotation encoding="application/x-tex">y=\frac{cx+3}{x+b}</annotation></semantics></math></em>
                </p>функцийн график нь (1, 2) цэгийг дайрах ба хэвтээ<br/>
                асимптот нь 𝑦 = 3 шулуун бол босоо асимптотыг <br/>
                ол.`,
            labelA:`x = 3`,
            labelB:`x = 2`,
            labelC:`x = −3`,
            labelD:`x = −2`,
            labelE:`x = −1`
        },
        {
            id: "24",
            text:``,
            labelA:``,
            labelB:``,
            labelC:``,
            labelD:``,
            labelE:``
        },
        {
            id: "25",
            text:`<p>. Конусын байгуулагч суурийн хавтгайтай үүсгэх өнцгийн <br/>
            синус
            <em class=""><math display="block" class="font-semibold w-10" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>12</mn><mn>13</mn></mfrac><annotation encoding="application/x-tex">\frac{12}{13}</annotation></semantics></math></em>
            байв. Конусын суурийн радиус 5 бол хажуу<br/>
            гадаргуун талбайг ол.</p>`,
            labelA:``,
            labelB:``,
            labelC:``,
            labelD:``,
            labelE:``
        },
        {
            id: "26",
            text:``,
            labelA:``,
            labelB:``,
            labelC:``,
            labelD:``,
            labelE:``
        },
        {
            id: "27",
            text:``,
            labelA:``,
            labelB:``,
            labelC:``,
            labelD:``,
            labelE:``
        },
        {
            id: "28",
            text:`Зөвхөн 1, 2, 3 цифрүүд хэрэглээд дөрвөн оронтой <br/>
                дараах нөхцөлийг хангах хичнээн тоо зохиож болох вэ? <br/>
                Үүнд цифр бүрийг хоёроос ихгүй удаа хэрэглэнэ <br/>
                (заримыг нь хэрэглэхгүй байсан ч болно).`, 
            labelA:`78`,
            labelB:`81`,
            labelC:`36`,
            labelD:`18`,
            labelE:`54`
        },
        
        
      ]
    return (
       <div class="w-full flex flex-col "> 
            {
                props.map((data)=>{
                    return <Test text={data.text} id={data.id} labelA={data.labelA} labelB={data.labelB} labelC={data.labelC} labelD={data.labelD} labelE={data.labelE}/>
                })
            }
       </div>
    )
}
export default Task2