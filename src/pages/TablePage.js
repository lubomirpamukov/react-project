import SortableTable from "../components/SortableTable";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 4 },
    { name: "Banana", color: "bg-yellow-500", score: 2 },
    { name: "Lime", color: "bg-green-500", score: 3 },
  ];

  const config = [
    { 
        label: "Name", 
        render: (fruit) => fruit.name,
        sortValue: (fruit) => fruit.name
    },
    {
      label: "Color",
      render: (fruit) => <div className={`${fruit.color} p-2 rounded`}></div>,
    },
    { 
        label: "Score", 
        render: (fruit) => fruit.score,
        sortValue: (fruit) => fruit.score
    },
  ];

  return <SortableTable data={data} config={config} />;
}

export default TablePage;
