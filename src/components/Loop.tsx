import { useState } from 'react'

const Loop = () => {
	const [value, /*setValue*/] = useState<number>(0)

	// gör inte så här - skapar en oändlig loop
	// setValue(value + 1)

	return (
		<div className="component"> Looping component. value={value} </div>
	)
}

export default Loop
