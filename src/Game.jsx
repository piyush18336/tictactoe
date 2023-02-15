import React from 'react'
import App from './App'

const Game = () => {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
  return (
    <div className="game">
    <div className="game-board">
      <App/>
    </div>
    <div className="game-info">
      <ol>{/*TODO*/}</ol>
    </div>
  </div>
  )
}

export default Game
