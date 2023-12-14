import React, { useState } from "react";
import WordTable from "./WordTable";
import WordInput from "./WordInput";
import { createPortal } from "react-dom";
import Modal from "../ui/Modal";
import WordModalContext from "./WordModalContext";

const WordBody = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <WordTable />
      <WordInput />
      {isOpen &&
        createPortal(
          <Modal>
            <WordModalContext />
          </Modal>,
          document.body
        )}
    </>
  );
};

export default WordBody;
