import Data from "../travels/Data";
import Travel from "./Travels";
import Nav from "./Nav";

const travel = Data.map((journal) => (
  <Travel key={journal.id} journal={journal} />
));

const Journal = () => {
  return (
    <div>
      <Nav />
      {travel}
    </div>
  );
};

export default Journal;
