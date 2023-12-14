import { useState } from "react";
import DefaultLayout from "./layouts/DefaultLayout";
import WordBody from "./compoents/Word/WordBody";

function App() {
  return (
    <>
      <DefaultLayout>
        <WordBody />
      </DefaultLayout>
    </>
  );
}

export default App;
