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
      </div>
      <Grid gridSize={gridSize} />
    </div>
  );
}
