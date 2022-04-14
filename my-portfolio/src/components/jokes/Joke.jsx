import Jokes from "../jokes/Jokes";
import JokesData from "../jokes/JokeData";

const jokeEl = JokesData.map((joke) => (
  <Jokes key={joke.setup} setup={joke.setup} punchline={joke.punchline} />
));

const Joke = () => {
  return <div className="App flex justify-between p-8">{jokeEl}</div>;
};

export default Joke;
