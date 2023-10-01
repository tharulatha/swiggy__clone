import { IMG_CDN_URL } from "./config";

const RestrurantCard = ({ name, cuisines, cloudinaryImageId, avgRating}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="restCard"></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h5>{ avgRating}stars</h5>
    </div>
  );
};

export default RestrurantCard;
