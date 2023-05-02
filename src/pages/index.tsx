import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import { useState } from 'react'


export default function Home() {
  const [result, setResult] = useState(0)
  const [rock, setRock] = useState(0)
  const [papper, setPapper] = useState(0)
  const [scissors, setScissors] = useState(0)
  function checkWinner() {
    {checkWinner ? <div> className='gameText'
  <h2>You are the winner</h2>
 </div> : null}
}
  return (
    <div>
      <div id="gameDiv">
        <h1 className="gameText" id="playerText">Player: </h1>
        <h1 className="gameText" id="computerText">Computer: </h1>


        <button onClick={() => setRock(rock + 1)} className="choiceBtn">ROCK</button>
        <button onClick={() => setPapper(papper + 1)} className="choiceBtn">PAPER</button>
        <button onClick={() => setScissors(scissors + 1)} className="choiceBtn">SCISSORS</button>
        <h1 className="gameText" id="resultText">Result: {result} </h1>
      </div>
    </div>
  )
}
