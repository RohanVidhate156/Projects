import { useState } from "react";
import "./Moves.css"
export default function Moves() {
  const [moves, setMoves] = useState({ blue: 0, green: 0, yellow: 0, red: 0 });
  function onHandleBlueMoves (){
    setMoves((preMoves)=>{
      return {...preMoves, blue:preMoves.blue+1};
    })
  }
  function onHandleGreenMoves (){
    setMoves((preMoves)=>{
      return {...preMoves, green:preMoves.green+1};
    })
  }function onHandleYellowMoves (){
    setMoves((preMoves)=>{
      return {...preMoves, yellow:preMoves.yellow+1};
    })
  }function onHandleRedMoves (){
    setMoves((preMoves)=>{
      return {...preMoves, red:preMoves.red+1};
    })
  }
  return (
    <>
      <div className="container">
        <h1>Game Begins</h1>

        <h4>Blue Moves={moves.blue}</h4>
        <button className="Blue" onClick={onHandleBlueMoves}>+1</button>

        <h4>Green Moves={moves.green}</h4>
        <button  className="Green" onClick={onHandleGreenMoves}>+1</button>
        
        <h4>Yellow Moves={moves.yellow}</h4>
        <button  className="Yellow" onClick={onHandleYellowMoves}>+1</button>

        <h4>Red Moves={moves.red}</h4>
        <button className="Red" onClick={onHandleRedMoves}>+1</button>

        
      </div>
    </>
  );
}
