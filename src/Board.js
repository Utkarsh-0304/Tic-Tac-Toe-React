import { useState } from "react";

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

function Square() {
  const [val, setVal] = useState(null);

  const handleClick = () => {
    setVal("X");
  };

  return (
    <button className="square" onClick={handleClick}>
      {val}
    </button>
  );
}
