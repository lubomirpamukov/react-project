import { useState, Fragment } from "react";
import Table from "./Table";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { useSort } from "./hooks/useSort";

function SortableTable({ ...props }) {
  const { config, data } = props;
  const {sortBy, sortOrder, sortedData, handleSort} = useSort(data,config)
  
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="p-2 relative cursor-pointer hover:bg-gray-100"
          onClick={() => handleSort(column.label)}
        >
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </th>
      ),
    };
  });

  return (
      <Table {...props} data={sortedData} config={updatedConfig}></Table>
  );
}


function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <Fragment>
        <GoTriangleUp className="absolute -left-1 mr-1" />
        <GoTriangleDown className="absolute -left-1 top-4 text-l" />
      </Fragment>
    );
  }

  if (sortOrder === null) {
    return (
      <Fragment>
        <GoTriangleUp className="absolute -left-1 mr-1" />
        <GoTriangleDown className="absolute -left-1 top-4 text-l" />
      </Fragment>
    );
  } else if (sortOrder === "asc") {
    return <GoTriangleUp className="absolute -left-1 mr-1" />;
  }else {
    return <GoTriangleDown className="absolute -left-1 top-4 text-l" />
  }
}

export default SortableTable;
