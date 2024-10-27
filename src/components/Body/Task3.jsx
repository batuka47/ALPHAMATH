import { useState } from 'react'
import { Link } from 'react-router-dom'
import RadioButton from './RadioBtn'
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
            text:``,
            labelA:``,
            labelB:``,
            labelC:``,
            labelD:``,
            labelE:``
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
            text:``,
            labelA:``,
            labelB:``,
            labelC:``,
            labelD:``,
            labelE:``
        },
        {
            id: "33",
            text:``,
            labelA:``,
            labelB:``,
            labelC:``,
            labelD:``,
            labelE:``
        },
        {
            id: "34",
            text:``,
            labelA:``,
            labelB:``,
            labelC:``,
            labelD:``,
            labelE:``
        },
        {
            id: "35",
            text:``,
            labelA:``,
            labelB:``,
            labelC:``,
            labelD:``,
            labelE:``
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