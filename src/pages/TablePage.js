import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 5 },
    { name: "Banana", color: "bg-yellow-500", score: 5 },
    { name: "Lime", color: "bg-green-500", score: 5 },
  ];

  const config = [
    { label: "Name ", render: (fruit) => fruit.name },
    {
      label: "Color",
      render: (fruit) => <div className={`${fruit.color} p-2 rounded`}></div>,
    },
    { 
        label: "Score", 
        render: (fruit) => fruit.score,
        header: () => <th className="bg-red-500 p-1 rounded">Score</th>
    },
  ];

  return <Table data={data} config={config} />;
}

export default TablePage;
