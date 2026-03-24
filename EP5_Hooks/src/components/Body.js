import { resList } from "../utils/mockData";
import Restaurants from "./Restaurants";
import { useState } from "react";

const Body = () => {
  // array destructuring

  /* === can do this also
  const arr = useState(resList);
  const resturentList = arr[0];
  const setResturentList = arr[1];
  */

  const [resturentList, setResturentList] = useState(resList);

  const filterCallback = () => {
    const filteredList = resturentList.filter((resturent) => {
      console.log(resturent.info.avgRating);
      return resturent.info.avgRating > 4;
    });

    setResturentList(filteredList);

    console.log(filteredList);
  };

  // taking input value and storing to a state variable
  const [input, setInput] = useState("");

  // storing the input field value in state variable
  const takingInput = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  // handling submit = when we submit, the site doesn't refresh
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="body">
      <form className="body-search" onSubmit={handleSubmit}>
        <input
          className="input-bar"
          type="text"
          value={input}
          onChange={takingInput}
        ></input>
        <button className="search-btn">Search</button>
      </form>
      <button className="filter-btn" onClick={filterCallback}>
        Filter
      </button>
      <div className="res-container">
        {/* not using key(not acceptable <<<<< index as key <<<< unique id ( best practice ) ) */}
        {resturentList.map((resturent, idx) => (
          <Restaurants key={resturent.info.id} resObj={resturent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
