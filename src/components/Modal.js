import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ onClose, children, actionBar }) {
    useEffect (() =>{
        const body = document.querySelector("body");
        body.classList.add("overflow-hidden");

        return () =>{
            body.classList.remove("overflow-hidden");
        }
    }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white flex flex-col">
        <div className="flex-grow">{children}</div>
        {actionBar}
      </div>
    </div>,

    document.querySelector(".modal")
  );
}

export default Modal;
