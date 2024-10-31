import { useState } from "react";
import Grid from "../Grid/grid.component";
import Btn from "../Btn/btn.component";
export default function Game() {
  const [gridSize, setGridSize] = useState(16);
  return (
    <div className="my-4">
      <div className="flex justify-center">
        <Btn onClick={() => setGridSize((Math.sqrt(gridSize) + 1) ** 2)}>Increment grid size</Btn>
        <Btn onClick={() => gridSize > 4 && setGridSize((Math.sqrt(gridSize) - 1) ** 2)}>Decrement grid size</Btn>
      </div>
      <div className="text-red-500">
        {/* {<span style={{ display: gridSize < 4 ? "block" : "none" }}>Must be greater than or equal to 4</span> }
        {<span style={{ display: gridSize > 100 ? "block" : "none" }}>Must be less than or equal to 100</span> }
        {<span style={{ display: gridSize % 2 !== 0 ? "block" : "none" }}>Must be an even number</span>} */}
      </div>
      <Grid gridSize={gridSize} />
    </div>
  );
}
