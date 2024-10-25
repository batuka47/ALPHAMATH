import { useState } from 'react'
import { Link } from 'react-router-dom'
import RadioButton from './RadioBtn'
import Test from './Test';
import parse from 'html-react-parser';
function Task1(prop){
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
            labelB:``,
            labelC:``,
            labelD:``,
            labelE:``
        },
        {
            id: "14",
            text:``,
            labelA:``,
            labelB:``,
            labelC:``,
            labelD:``,
            labelE:``
        },
        {
            id: "15",
            text:``,
            labelA:``,
            labelB:``,
            labelC:``,
            labelD:``,
            labelE:``
        },
        {
            id: "16",
            text:``,
            labelA:``,
            labelB:``,
            labelC:``,
            labelD:``,
            labelE:``
        },
        {
            id: "17",
            text:``,
            labelA:``,
            labelB:``,
            labelC:``,
            labelD:``,
            labelE:``
        },
        {
            id: "18",
            text:``,
            labelA:``,
            labelB:``,
            labelC:``,
            labelD:``,
            labelE:``
        },
        {
            id: "19",
            text:``,
            labelA:``,
            labelB:``,
            labelC:``,
            labelD:``,
            labelE:``
        },
        {
            id: "20",
            text:``,
            labelA:``,
            labelB:``,
            labelC:``,
            labelD:``,
            labelE:``
        },
        {
            id: "21",
            text:``,
            labelA:``,
            labelB:``,
            labelC:``,
            labelD:``,
            labelE:``
        },
        {
            id: "22",
            text:``,
            labelA:``,
            labelB:``,
            labelC:``,
            labelD:``,
            labelE:``
        },
        {
            id: "23",
            text:``,
            labelA:``,
            labelB:``,
            labelC:``,
            labelD:``,
            labelE:``
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
            text:``,
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
            text:``,
            labelA:``,
            labelB:``,
            labelC:``,
            labelD:``,
            labelE:``
        },
        
        
      ]
    return (
       <div class="w-full flex flex-col "> 
            {
                props.map((data)=>{
                    return <Test text={data.text} id={data.id} labelA={data.labelA} labelB={data.labelB} labelC={data.labelC} labelD={data.labelD} labelE={data.labelE}/>
                })
            }
            
            <p>360 -ын <br /> олоорой.
            <p><em><math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>5</mn><mn>24</mn></mfrac><annotation encoding="application/x-tex">\frac{5}{24}</annotation></semantics></math></em></p>хэсэг нь 𝑥𝑥 тооны -тай тэнцүү бол 𝑥𝑥 тоог
            <p><em><math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mfrac><mn>5</mn><mn>8</mn></mfrac><annotation encoding="application/x-tex">\frac{5}{8}</annotation></semantics></math></em></p>
            </p>
       </div>
    )
}
export default Task1