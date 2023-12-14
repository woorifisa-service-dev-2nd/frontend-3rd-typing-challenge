import React from "react";
import WordHeader from "../compoents/Word/WordHeader";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <WordHeader />

      {children}
    </div>
  );
};

export default DefaultLayout;
