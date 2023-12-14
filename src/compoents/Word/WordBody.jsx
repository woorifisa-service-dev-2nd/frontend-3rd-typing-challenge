import React, { useState } from "react";
import WordTable from "./WordTable";
import WordInput from "./WordInput";
import { createPortal } from "react-dom";
import Modal from "../ui/Modal";
import WordModalContext from "./WordModalContext";

const WordBody = () => {
  const [isOpen, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      <WordTable />
      <WordInput />
      
      {/* 화면에 마지막으로 남은 단어를 입력하면 openModal 실행 후 Modal 열린다.*/}
      {isOpen &&
        createPortal(
          <Modal onClose={closeModal}>
            <WordModalContext onClose={closeModal} />
          </Modal>,
          document.body
        )}
    </>
  );
};

export default WordBody;
