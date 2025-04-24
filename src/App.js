import Route from "./components/Route";
import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";
import Link from "./components/Link";

function App() {
  return (
    <div>
      <Link to={"/dropdown"}>Dropdown</Link>
      <Link to={"/accordion"}>Accordion</Link>
      <div>
        <Route path={"/dropdown"} children={<DropdownPage />} />
        <Route path={"/accordion"} children={<AccordionPage />} />
      </div>
    </div>
  );
}

export default App;
