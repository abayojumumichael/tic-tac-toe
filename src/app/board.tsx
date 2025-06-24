'use client'
import { Button } from '@/components/ui/button';
import { useState } from 'react'

export function Square({ value, onSquareClick }: { value: string | null, onSquareClick: () => void }) {

    return (
        <Button
            className='square'
            onClick={onSquareClick}
        >
            {value}
        </Button>
    )
}

function calculateWinner(squares: (string | null)[]) {
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

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default function Board() {
    const [moves, setMoves] = useState(9);
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
    const winner = calculateWinner(squares)
    let status: string

    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = (xIsNext ? "X" : "O") + "'s turn";
    }

    if (moves == 0 && winner == null) {
        status = "Tie!";
    }

    function handleClick(i: number) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";

        } else {
            nextSquares[i] = "O";
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
        setMoves(moves - 1);
    }

    return (
        <>
            <div className='status'>{status}</div>
            <div className='board-row'>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className='board-row'>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className='board-row'>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    )
}
