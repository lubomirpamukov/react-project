import Dropdown from "./components/Dropdown";
import React, { useState } from "react";
function App(){
    const [selected, setSelected] = useState(null);

    const handleSelect = (option) => {
      setSelected(option);
    }
  
  const options = [
    {label: 'Red', value: 'red'},
    {label: 'Green', value: 'green'},
    {label: 'Blue', value: 'blue'},
  ]


  return <Dropdown options={options} onChange={handleSelect} value={selected}/>
}

export default App;