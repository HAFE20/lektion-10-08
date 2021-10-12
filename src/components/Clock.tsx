import { useState, useEffect } from 'react'

const Clock = () => {
	// state-variabel: antal sekunder som gått
	const [seconds, setSeconds] = useState<number>(0)

	useEffect(() => {
		let intervalId = setInterval(() => {
			// Kan inte använda "seconds" direkt pga. "closure"
			setSeconds(s => s + 1)
		}, 1000)
		const stopInterval = () => {
			console.log('Nu stoppas intervallet')
			clearInterval(intervalId)
		}
		return stopInterval
	}, [])

	return (
		<div className="component">
			Det har gått {seconds} sekunder.
		</div>
	)
}

export default Clock

/*
Tips: setInterval( callback, intervalMs )
setTimeout( () => { console.log('Hoppla!') }, 1000)
*/
