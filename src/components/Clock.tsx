

const Clock = () => {
	// state-variabel: antal sekunder som gått

	return (
		<div>
			Det har gått ?? sekunder.
		</div>
	)
}

/*
Tips: setTimeout( callback, intervalMs )

*/
setTimeout( () => { console.log('Hoppla!') }, 1000)
