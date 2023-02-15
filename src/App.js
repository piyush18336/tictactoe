import { useState } from 'react';
import './index.css';
import Game from './Game';
const Square = ({value,onSquareClick})=>{
  return(
    <button className="boxes" onClick={onSquareClick} >
      {value}
   </button>
  )
}

const calculateWinner = (squares)=>{
 const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
 ];

 for(let i=0;i<lines.length;i++){
  const [a,b,c] = lines[i];
  if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
    console.log(squares[a]);
    return squares[a];
  }
 } 
 return null;
}

function App() {

  const[squares,setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true);
  const [fill,setFill] = useState(0);
  var count = 0;

  const handleClick = (index)=>{
    if(squares[index] || calculateWinner(squares)){
      return;
    }
    const [...nextSquares] = squares;
    setFill(count);
    console.log(nextSquares);
    if(xIsNext){
      nextSquares[index] = "X";
    }else{
      
      nextSquares[index] = "O";
    }
    setSquares( nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "Winner" + winner; 
  }else{
    if(fill===8){
      status = "Game Tie";
    }else{
      status = "Next Player" + (xIsNext?"X":"O")
    }
  }
  return (
  <>
  <div className="status">{status}</div>
  <div className="boxes_structure">
  <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
  <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
  <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
  <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
  <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
  <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
  <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
  <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
  <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
  </div>
  </>
  );
}



export default App;
