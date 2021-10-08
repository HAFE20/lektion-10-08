import { useState, useEffect } from 'react'

const Lifecycle = () => {
	const [x, setX] = useState<number>(1)
	const [y, setY] = useState<number>(1)

	console.log(`Jag skrivs ut inuti komponent-funktionen. x == ${x}, y == ${y}.`);

	useEffect(() => {
		// Körs vid livscykel händelsen MOUNTED
		console.log('Jag skrivs ut inuti useEffect, med hjälp av [].');
		setX(10)
	}, [])

	useEffect(() => {
		console.log('x har ändrats');
	}, [x])
	useEffect(() => {
		console.log('y har ändrats');
	}, [y])

	return (
		<div className="component">
		Livscykel <br/>
		<button onClick={() => setX(x + 1)}> Lägg till 1 till x </button>
		<button onClick={() => setY(y + 1)}> Lägg till 1 till y </button>
		</div>
	)
}

export default Lifecycle
