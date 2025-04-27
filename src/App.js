import Route from "./components/Route";
import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import Sidebar from "./components/Sidebar";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage"

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path={"/dropdown"} children={<DropdownPage />} />
        <Route path={"/accordion"} children={<AccordionPage />} />
        <Route path={"/buttons"} children={<ButtonPage />} />
        <Route path={"/modal"} children={<ModalPage />} />
        <Route path={"/table"} children={<TablePage />} />
        <Route path={"/counter"} children={<CounterPage initialCount={10} />} />
      </div>
    </div>
  );
}

export default App;
