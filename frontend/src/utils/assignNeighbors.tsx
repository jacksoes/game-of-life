const assignNeighbors = (arr: string[][], row: number, col: number) => {
    //checks for type out of bounds error
    if (row > 0 && col > 0 && arr[row - 1][col - 1] !== undefined)
        arr[row - 1][col - 1] = "neighbor";
    if (row > 0 && arr[row - 1][col] !== undefined)
        arr[row - 1][col] = "neighbor";
    if (row > 0 && col < arr[row - 1].length - 1 && arr[row - 1][col + 1] !== undefined)
        arr[row - 1][col + 1] = "neighbor";

    if (col > 0 && arr[row][col - 1] !== undefined)
        arr[row][col - 1] = "neighbor";
    if (col < arr[row].length - 1 && arr[row][col + 1] !== undefined)
        arr[row][col + 1] = "neighbor";

    if (row < arr.length - 1 && col > 0 && arr[row + 1][col - 1] !== undefined)
        arr[row + 1][col - 1] = "neighbor";
    if (row < arr.length - 1 && arr[row + 1][col] !== undefined)
        arr[row + 1][col] = "neighbor";
    if (row < arr.length - 1 && col < arr[row + 1].length - 1 && arr[row + 1][col + 1] !== undefined)
        arr[row + 1][col + 1] = "neighbor";

}

export default assignNeighbors;