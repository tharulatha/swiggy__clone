import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./config";
import Simmer from "./Simmer";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestrurantDetail = () => {
    const [restarurantDetail, setRestarurantDetail] = useState({});
  const params = useParams();
  //const {id} = useParams()// can alo destructure like this
    const { id } = params;
    
    const dispatch = useDispatch();

    const handleItems = () => {
        dispatch(addItem("Grapes"))
    }

  useEffect(() => {
      getRestruantInfo();
     
  }, []);

  async function getRestruantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
        id
    );
    const json = await data.json();
    console.log(json);
    setRestarurantDetail(json?.data?.cards[0]?.card?.card?.info);
    }
    


  return !restarurantDetail ? (
    <Simmer />
  ) : (
    <>
      <div>
        <h1>Restaurant id :{restarurantDetail?.id}</h1>
        <h2>{restarurantDetail?.name}</h2>
        <div className="image-container">
          <img
            src={IMG_CDN_URL + restarurantDetail?.cloudinaryImageId}
            alt="restImage"
            className="image"
          />
        </div>
        <h4>{restarurantDetail?.city}</h4>
        <h4>{restarurantDetail?.avgRating + "⭐"}</h4>
        <h4>{restarurantDetail?.locality}</h4>
        <h4>{restarurantDetail?.areaName}</h4>
                  <h4>{"Cost For Two " + restarurantDetail?.costForTwo}</h4>
                  <button onClick={() => handleItems()}>Add Item</button>
              </div>
           
    </>
  );
};

export default RestrurantDetail;
