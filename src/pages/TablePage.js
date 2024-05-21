import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 4 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 2 },
  ];

  const config = [{ label: "Fruit" }, { label: "Color" }, { label: "Score" }];

  return (
    <div>
      <Table data={data} config={config} />
    </div>
  );
}

export default TablePage;
