import { Fragment } from 'react';
import { v4 as uuidv4} from 'uuid'
function Table({ data, config }) {

  const renderedColumns = config.map((column) => {
    if(column.header){
      return <Fragment key={uuidv4()}>{column.header()}</Fragment>;
    }
  
    return <th className='p-2' key={column.label}>{column.label}</th>
  });

  const renderedRows = data.map((item) => {
    const renderedCells = config.map((itemProp) =>{
        return <td className="p-2" key={itemProp.label}>{itemProp.render(item)}</td>
    })
    
    return (
      <tr className="border-b" key={uuidv4()}>
        {renderedCells}
      </tr>
    );

  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {renderedColumns}
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
