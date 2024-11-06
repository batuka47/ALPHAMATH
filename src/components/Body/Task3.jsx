import { useState } from 'react'
import Test from './Test';
import parse from 'html-react-parser';
function Task3(prop){
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
    const props = [
        {
            id: "29",
            text:`3 ба 8-ын алинд ч хуваагддаггүй 100-аас хэтрэхгүй <br/>
                    натурал тоонуудын нийлбэрийг ол.`,
            labelA:`2983`,
            labelB:`2764`,
            labelC:`2743`,
            labelD:`2503`,
            labelE:`4810`
        },
        {
            id: "30",
            text:``,
            labelA:``,
            labelB:``,
            labelC:``,
            labelD:``,
            labelE:``
        },
        {
            id: "31",
            text:``,
            labelA:``,
            labelB:``,
            labelC:``,
            labelD:``,
            labelE:``
        },
        {
            id: "32",
            text:`Дүрсийг 𝑦 = 𝑥 шулууны хувьд тэгш хэмтэй хувиргаад, <br/>
                    дараа нь координатын эхийн хувьд цагийн зүүний дагуу <br/>
                    90° эргүүлэх хувиргалтын матрицыг ол.`,
            labelA:``,
            labelB:``,
            labelC:``,
            labelD:``,
            labelE:``
        },
        {
            id: "33",
            text:`𝐴D өндөртэй 𝐴BC гурвалжин өгөв. 𝐷 цэгт төвтэй 𝐷A <br/>
                радиустай тойрог гурвалжны 𝐴B ба 𝐴C талыг харгалзан <br/>
                𝑀, 𝑁 цэгээр огтолно. Хэрэв 𝐴M = 5, 𝐵M = 3 ба 𝐴N = 4 <br/>
                бол 𝐴C талын уртыг ол.`,
            labelA:`6`,
            labelB:`8`,
            labelC:`9`,
            labelD:`10`,
            labelE:`11`
        },
        {
            id: "34",
            text:`𝑓(𝑥) функцийн уламжлал болох 𝑓′(𝑥) функцийн график <br/>
            нь зурагт үзүүлсэн парабол байв. Хэрэв 𝑓(0) = −4 бол <br/>
            𝑓(𝑥) функцийн максимум утгыг олоорой.`,
            labelA:``,
            labelB:`4`,
            labelC:`3`,
            labelD:`9`,
            labelE:`5`
        },
        {
            id: "35",
            text:``,
            labelA:`37`,
            labelB:`13`,
            labelC:`26`,
            labelD:`25`,
            labelE:`34`
        },
        {
            id: "36",
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
       </div>
    )
}
export default Task3