import './App.css';
import { useState } from 'react';
import { ChuckCard } from './components/chuck_card';
import ChuckInfo from './components/chuck_info';
import { Joke, randomChuckNorrisJoke } from './joke';
import { v4 as uuidv4 } from 'uuid';
import { imageReadFile } from './types/image_data';
import { ChuckJoke } from './components/chuck_joke';



const images = imageReadFile("./assets/image.info");

function App() {



	// const [rimages, setImages] = useState<Array<ImageData>>({images})
	const [chuckGreeting, setChuckGreeting] = useState<string>("I am Chuck Norris!!!")
	
	const [whalesSaved, setWhalesSaved] = useState<number>(700)
	const [roundHouseKicks, setRoundHouseKicks] = useState<number>(300000)
	const [jokes, setJokes] = useState<Array<Joke>>([{
		"id": 1,
		"joke": "Chuck Norris doesn’t read books. He stares them down until he gets the information he wants.",
	},
	{
		"id": 2,
		"joke": "Time waits for no man. Unless that man is Chuck Norris.",
	},
	{
		"id": 3,
		"joke": "The dinosaurs looked at Chuck Norris the wrong way once. You know what happened to them.",
	},
	{
		"id": 4,
		"joke": "Chuck Norris does not own a stove, oven, or microwave, because revenge is a dish best served cold.",
	}]);
	// const [apiJoke, setApiJoke] = useState<<Joke>(jokes[0]);
	return (
		<div className="App">


			<h1>React props and state</h1>
			<ChuckCard greeting={chuckGreeting} images={[...images]} />

			<h2>Chuck Info: </h2>
			<ChuckInfo {...{ whaleCount: whalesSaved, roundHouseCount: roundHouseKicks }} />

			<h2>Jokes:</h2>
			<div className='joke_wrapper'>
				{jokes.map((pun) => { return <ChuckJoke key={uuidv4()} joke={pun.joke} /> })}
			</div>
			<h2>Filtered Jokes:</h2>
			<div className='joke_wrapper'>
				{jokes.filter(pun => pun.id === 3).map((pun) => { return <ChuckJoke key={uuidv4()} joke={pun.joke} /> })}
			</div>
			
			{/* <h2>'Joke' from the Chuck Norris API:</h2>
			<div className='api_joke_wrapper'>
				<ChuckJoke key={uuidv4()} joke="s" />

			</div> */}

		</div>
	);
}

export default App;
