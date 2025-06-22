"use client";
import { useState } from "react";

const emptyBoard = Array(9).fill(null);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function TicTacToeGame() {
  const [board, setBoard] = useState(emptyBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(Boolean);

  function handleClick(idx) {
    if (board[idx] || winner) return;
    const newBoard = board.slice();
    newBoard[idx] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  function handleReset() {
    setBoard(emptyBoard);
    setXIsNext(true);
  }

  let info;
  if (winner) {
    info = `Winner: ${winner}`;
  } else if (isDraw) {
    info = "Draw!";
  } else {
    info = `Next: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div className="mb-4 text-lg font-bold text-[var(--highlight)]">{info}</div>
      <div className="grid grid-cols-3 gap-2 w-64 max-w-full">
        {board.map((cell, idx) => (
          <button
            key={idx}
            className="w-20 h-20 sm:w-20 sm:h-20 bg-[var(--card-bg)] text-3xl font-extrabold rounded-lg shadow-md flex items-center justify-center border-2 border-[var(--accent)] transition hover:bg-[var(--highlight)]/20 disabled:opacity-60"
            onClick={() => handleClick(idx)}
            disabled={!!board[idx] || !!winner}
            aria-label={`Cell ${idx + 1}`}
          >
            {cell}
          </button>
        ))}
      </div>
      <button
        onClick={handleReset}
        className="mt-6 px-6 py-2 rounded-full font-bold text-lg bg-gradient-to-r from-[var(--highlight)] to-[var(--accent)] text-white shadow-md hover:scale-105 transition-transform"
      >
        Reset
      </button>
    </div>
  );
} 