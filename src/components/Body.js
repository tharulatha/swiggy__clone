import { useEffect, useState } from "react";
import RestrurantCard from "./RestrurantCard";
import Simmer from "./Simmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnile";


//Conditional Rendering
//if restarurant is empty => display simmer card
//if restarurant not empty => display restrauo cards

const Body = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    //API call
    getRestarunt();
  }, []);

  async function getRestarunt() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //Optional Chaing
    console.log(json);
    setAllRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  // if (!allRestaurant) return null; => your fix error of length by giving condition or Optional Chaining(Early Return)

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offine. Please Check Your Internet Connection</h1>
  }


  return allRestaurant?.length === 0 ? (
    <Simmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          className="search-input"
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            //Need to filter the data first
            const data = filterData(searchText, allRestaurant);
            // update to state = restaurant
            setFilteredRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              to={"/restarurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestrurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
