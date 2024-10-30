import { useState } from "react";
import Grid from "../Grid/grid.component";
export default function Game() {
    const [gridSize, setGridSize] = useState(16);
  return (
    <div>
      <input onChange={(e) => parseInt(e.target.value) % 2 === 0 && setGridSize(parseInt(e.target.value))} className="w-20 mx-auto" type="number" />
      <Grid gridSize={gridSize} />
    </div>
  );
}
