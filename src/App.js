import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "aeeagea",
      label: "Can I use React on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. ",
    },
    {
      id: "3vsdsd",
      label: "Can I use Javascript on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. ",
    },
    {
      id: "eav333f",
      label: "Can I use CSS on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. ",
    },
  ];

  return <Accordion items={items} />;
}

export default App;
