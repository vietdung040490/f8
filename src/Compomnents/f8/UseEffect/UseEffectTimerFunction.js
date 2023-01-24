import React, { useEffect, useState } from 'react'

function UseEffectTimerFunction() {
	const [number, setNumber] = useState(180);
	useEffect(() =>{
		const setInt = setInterval(() => {
			setNumber(prev => prev -1)
		}, 1000);
		return () => clearInterval(setInt)
	}, [])
	console.log(number)

	return (
		<h2>{number}</h2>
	)
}
export default UseEffectTimerFunction;