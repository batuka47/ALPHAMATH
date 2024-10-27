import { useState } from 'react'
import RadioButton from './RadioBtn'
import parse from 'html-react-parser';
function Test(props) {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };  
  return (
    <div class="w-2/3">
        <p class="font-semibold text-xl mt-8 flex gap-1">
            {props.id}. 
            <p class="flex items-center">
            {parse(props.text)}
            </p>
        </p>
        <div class="p-4">
            <RadioButton
                label={props.labelA}
                value="A"
                checked={selectedValue === "A"}
                onChange={handleChange}
            />
            <RadioButton
                label={props.labelB}
                value="B"
                checked={selectedValue === "B"}
                onChange={handleChange}
            />
            <RadioButton
                label={props.labelC}
                value="C"
                checked={selectedValue === "C"}
                onChange={handleChange}
            />
            <RadioButton
                label={props.labelD}
                value="D"
                checked={selectedValue === "D"}
                onChange={handleChange}
            />
            <RadioButton
                label={props.labelE}
                value="E"
                checked={selectedValue === "E"}
                onChange={handleChange}
            />
        </div>
    </div>
  )
}

export default Test