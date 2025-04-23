import Accordion from "./components/Accordion";

const App = () => {

  const items = [
    {
      id: "1",
      label: "Item 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: "2",
      label: "Item 2",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "3",
      label: "Item 3",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ]

  return <Accordion items={items} />;
}

export default App;