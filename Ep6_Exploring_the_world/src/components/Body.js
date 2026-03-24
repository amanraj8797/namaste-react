import Restaurants from "./Restaurants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGI_API } from "../utils/constants";
import { SWIGGI_API_2 } from "../utils/constants";

const Body = () => {

  // array destructuring
  const [resturentList, setResturentList] = useState([]);

  const [allResturentList, setAllResturentList] = useState([]);


  const filterCallback = () => {

    const filteredList = allResturentList.filter((resturent) => {
      console.log(resturent.info.avgRating);
      return resturent.info.avgRating > 4.2;
    });

    setResturentList(filteredList);
  };

  // taking input value and storing to a state variable
  const [input, setInput] = useState("");

  // storing the input field value in state variable
  const takingInput = (e) => {

    const val = e.target.value;

    // it schedule the render of component as the function executes all its code
    setInput(val);

  };

  // useEffect
  useEffect(()=> {
    fetchData1();
  }, []);

  const fetchData1 = async () => {

    console.log("Use effect callback called")

    let data = await fetch(SWIGGI_API);
    
    // used to handle error if the promise gets reject
    if(!data.ok) {
      console.log("Not get the response");
      return;
    }

    console.log(data);

    // data is a readable stream not in readable form
    const json = await data.json();

    const val = json?.data?.cards;

    let len = val.length;

    let list = [];

    for(let i = 3; i < len; i++) {
      list.push(val[i].card.card);
    }

    console.log(list);

    setResturentList(list);
    setAllResturentList(list);
  }

  useEffect(() => {
    fetchData2();
  }, []);

  const fetchData2 = async () => {

    const data = await fetch(SWIGGI_API_2);

    if(!data.ok) {
      console.log("Unable to feach data from url 2");
      return;
    }

    const json = await data.json();

    console.log("API 2");

    console.log(json);

    const resturentList2 = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    // const merge = [...resturentList2, ...resturentList]

    // console.log(merge);

    setAllResturentList(resturentList2);
    setResturentList(resturentList2);

  }



  console.log("After use effect hook");

  // handling submit = when we submit, the site doesn't refresh
  const handleSubmit = (e) => e.preventDefault();

  // callback to handle the search input field
  const search = () => {

    const filterList = allResturentList.filter((resturent) => 
      // resturent.info.avgRating > Number(input)

      // resturent.info.name.indexOf(input) !== -1
      resturent.info.name.toLowerCase().includes(input.toLowerCase())
    );

    setResturentList(filterList);
    // setInput("");

  }

  // using ternary operator for conditional rendering

  return (resturentList.length === 0) ? ( <div className="body">
      <div className="body-search">
        <input
          className="input-bar"
          type="text"
          value={input}
          onChange={takingInput}
        ></input>
        <button className="search-btn" onClick={search}>Search</button>
      </div>
      <button className="filter-btn" onClick={filterCallback}>
        Filter
      </button>
      <Shimmer /> 
      </div>
  ) : (
    <div className="body">
      <div className="body-search">
        <input
          className="input-bar"
          type="text"
          value={input}
          onChange={takingInput}
        ></input>
        <button className="search-btn" onClick={search}>Search</button>
      </div>
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
