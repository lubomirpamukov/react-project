import Button2 from "./components/buttons/Button2";
import { GoPlug, GoRepoForked, GoSquirrel } from "react-icons/go";
import "./App.css";


function App() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  const handleMouseOver = () => {
    console.log("Mouse over button");
  };

  return (
    <div className="flex flex-col gap-2">
      <div>
        <Button2 onClick={handleClick} secondary>
          Click now
          <GoPlug className="text-2xl" />
        </Button2>
      </div>
      <div>
        <Button2 primary>
          Sale
          <GoRepoForked className="text-xl" />
        </Button2>
      </div>
      <div>
        <Button2 onMouseOver={handleMouseOver} warning>
          Cancel
          <GoSquirrel className="text-xl" />
        </Button2>
      </div>
      <div>
        <Button2 danger>Remove</Button2>
      </div>
      <div>
        <Button2 success>Edit</Button2>
      </div>
      <div>
        <Button2 primary rounded outline>
          Click me
        </Button2>
      </div>
      <div>
        <Button2 danger outline rounded>
          Edit
        </Button2>
      </div>
      <div>
        <Button2 success>Edit</Button2>
      </div>
      <div>
        <Button2 success>Edit</Button2>
      </div>
    </div>
  );
}

export default App;
