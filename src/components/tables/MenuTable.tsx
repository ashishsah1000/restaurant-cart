import { Link } from "react-router-dom";
import { Quanity } from "..";
import { FoodItem } from "../../interface";

export default function MenuTable({
  name = "food item",
  description = "description",
  price,
  id,
  image,
}: FoodItem) {
  return (
    <div
      className="d-flex custom-shadow m-2 rounded"
      style={{ width: "450px", overflow: "hidden", height: "200px" }}
    >
      <div className="image ">
        <img
          className=""
          src={image}
          style={{ width: "200px", height: "200px" }}
        />
      </div>
      <div
        className="d-flex flex-column justify-content-between"
        style={{ overflow: "hidden", padding: "20px 20px" }}
      >
        <div className="flex-grow-1 d-flex flex-column">
          <div className=" d-flex align-items-left">
            <Link to={`/dashboard/menu/item/${id}`}>
              <h5 className="text-overflow text-dark">{name} </h5>
            </Link>
          </div>
          <div className=" d-flex align-items-left " style={{}}>
            <p
              style={{
                minWidth: "200px",
                maxWidth: "200px",
                overflow: "hidden",
                fontSize: "11px",
              }}
              className="text-overflow"
            >
              {description}
            </p>
          </div>
        </div>
        <div className="actions d-flex  justify-content-center">
          <Quanity />
          <button style={{ width: "150px" }} className="btn btn-success">
            <b>$ {price} +</b>
          </button>
        </div>
      </div>
    </div>
  );
}
