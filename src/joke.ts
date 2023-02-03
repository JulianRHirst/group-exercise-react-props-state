export interface Joke {
    id: number;
    joke: string;
}

export async function randomChuckNorrisJoke() {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const json = await response.json();
    console.log(json);
    return json;
};

// export function randomChuckNorrisJoke() {
//     const joke = (async () => {
//         await callAPI()})();
//     return joke;
// };
//console.log(randomChuckNorrisJoke());