import { useEffect, useState } from "react";
import { getRandomInt } from "../../utils/random";
import assignNeighbors from "../../utils/assignNeighbors";
import "./DecorativeGrid.css";

const DecorativeGrid = () => {

 useEffect(() => {
  setInterval(randomizeGrid, 7500)
  }, []);
  
  const gridDefault: string[][] = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
  ]
  

  const [gridState, setGridState] = useState<string[][]>(gridDefault)

  const gridMapping = gridState.map((rowCell, rowIndex) =>
    rowCell.map((cell, cellIndex) => {
      if (cell === "X")
        return (<div className="grid-item bg-warning"></div>)
      else if(cell === "neighbor")
        return (<div className="grid-item bg-secondary"></div>)
      else
        return(<div className="grid-item"></div>)
    })
  )

  const clearGrid = async () =>{
    // take copy of original grid and set state
    const gridCopy: string[][] = gridDefault.map(row => [...row]);
    setGridState(gridCopy)
  }

  const createGrid = () =>{
    const index1 = getRandomInt(5)
    const index2 = getRandomInt(5)
    const gridCopy: string[][] = gridDefault.map(row => [...row]);
    // assign life to random cell
    gridCopy[index1][index2] = "X"
    // assign neighbors to surrounding cells
    assignNeighbors(gridCopy, index1, index2)
    return gridCopy;
  }

  const randomizeGrid = async () => {
    await clearGrid()  
    setGridState(createGrid())
  }




  


  return (<>
    <div id="decorative-grid" className="mt-auto mb-3 ">
      {gridMapping}
    </div>
    </>);
};

export default DecorativeGrid;
