import Route from "./components/Route";
import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import Sidebar from "./components/Sidebar";
import ModalPage from "./pages/ModalPage";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path={"/dropdown"} children={<DropdownPage />} />
        <Route path={"/accordion"} children={<AccordionPage />} />
        <Route path={"/buttons"} children={<ButtonPage />} />
        <Route path={"/modal"} children={<ModalPage />} />
      </div>
    </div>
  );
}

export default App;
