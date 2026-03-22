import { CDN_URL } from "../utils/constants";

const Restaurants = (props) => {

  const {resObj} = props;

  // optional chaining
  const {name, cuisines, avgRating, locality, cloudinaryImageId, sla } = resObj?.info;

  return (
    <div className="restaurant-x">
      <img src={CDN_URL+cloudinaryImageId} className="res-img" alt="restaurant image" />
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating}</h3>
      <h3>{sla.deliveryTime} to deliver</h3>
      <h3>{locality}</h3>
    </div>
  )
}

export default Restaurants;