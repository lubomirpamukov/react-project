import Dropdown from "../components/Dropdown";
import React, { useState } from "react";
function DropdownPage(){
    const [selected, setSelected] = useState(null);

    const handleSelect = (option) => {
      setSelected(option);
    }
  
  const options = [
    {label: 'Red', value: 'red'},
    {label: 'Green', value: 'green'},
    {label: 'Blue', value: 'blue'},
  ]


  return(
    <div className="flex">
      <Dropdown options={options} onChange={handleSelect} value={selected}/>
    </div>
  )
}

export default DropdownPage;