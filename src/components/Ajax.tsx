import { useState, useEffect } from 'react'

interface ServerResponse {
	message: string;
	time: string;
}
// Default-värde: dålig idé. Det ser ut som om vi fått ett svar från servern, när vi inte har det!
// const defaultData: ServerResponse = { message: '', time: '' }

const Ajax = () => {
	// Innan vi fått datan från servern är den NULL
	const [data, setData] = useState<null | ServerResponse>(null)
	const url: string = 'https://forverkliga.se/JavaScript/api/simple.php?key=value'

	console.log(`Vad är data?`, data);


	// När komponenten blir MOUNTED ska vi skicka request till servern
	useEffect(() => {
		// async + await använder Promises
		// måste använda en separat funktion som är async
		async function doAjax() {
			const response = await fetch(url)
			const json = await response.json()
			setData(json)
		}
		// Simulera lite lagg, 2 sekunder
		setTimeout(doAjax, 2000)

		// Men i vanliga fall anropar vi funktionen direkt
		// doAjax()
	}, [])

	// Använd ?: (conditional operator) eller en variabel och en if-sats för att välja vad som ska visas
	return (
		<div className="component">
			{ data
				? 'Serverns tid är: ' + data.time
				: 'Väntar på servern...' }
		</div>
	)
}

export default Ajax
