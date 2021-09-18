import React from "react";
import "./App.css";
import { Room } from "./SkywayClient";
const App: React.VFC = () => {
  return (
    <>
      <div>HELLO</div>
      <Room roomId={"1"} />
    </>
  );
};
export default App;
