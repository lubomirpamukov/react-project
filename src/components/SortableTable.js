import { useState, Fragment } from "react";
import Table from "./Table";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

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

function SortableTable({ ...props }) {
  const { config, data } = props;
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="p-2 relative cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </th>
      ),
    };
  });

  let sortedData = data;
  if (sortBy && sortOrder) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;
      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return (
      <Table {...props} data={sortedData} config={updatedConfig}></Table>
  );
}

export default SortableTable;
