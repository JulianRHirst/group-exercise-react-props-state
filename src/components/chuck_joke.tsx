// An alternative way of declaring a component is to write it as a function which
// returns a React.ReactNode. This is equivalent to the syntax in <ChuckCard/>

import { randomChuckNorrisJoke } from '../joke';
import React, { useState, useEffect } from "react";

// separate props type to standard data type for loose coupling
export interface ChuckJokeProps {
	joke: string;
};


export const ChuckJoke:React.FC<ChuckJokeProps> = ({ joke }) => {

		return (
			<p>{joke}</p>
		)

	};
/*
	export const apiChuckJoke:React.FC<ChuckJokeProps> = ({ joke }) => {

		const [stateJoke, setAPIJoke] = useState<string>("Loading Joke from API...")
		randomChuckNorrisJoke().then(
			(result: string) => {
				console.log("RESULT=" + result);
				
				setAPIJoke("llllllllllllllllll");
			});
	
			return (
				<p>{joke}</p>
			)
	
		};
	
	*/