import { useState } from "react";
import Modal from "../components/Modal";
import Button2 from "../components/buttons/Button2";

function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const actionBar = (
    <div className="flex gap-2 mt-4 justify-end"> 
      <Button2 onClick={handleClose} primary>
        Accept
      </Button2>
      <Button2 onClick={handleClose} danger>
        Decline
      </Button2>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      Do you accept our terms and conditions?
    </Modal>
  );
  return (
    <div>
      <Button2 onClick={handleOpen} primary>
        Open Modal
      </Button2>
      {isOpen && modal}
    </div>
  );
}

export default ModalPage;
