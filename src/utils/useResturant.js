import { useState } from "react";
import { FETCH_DATA_URL } from "../components/config";
import { useEffect } from "react";

const useResturant = (id) => {
  const [restarurantDetail, setRestarurantDetail] = useState({});

  useEffect(() => {
    getRestruantInfo();
  },[]);

  async function getRestruantInfo() {
    const data = await fetch(FETCH_DATA_URL + id);
    const json = await data.json();
    console.log(json);
    setRestarurantDetail(json?.data?.cards[0]?.card?.card?.info);
  }

  return restarurantDetail;
};

export default useResturant;
