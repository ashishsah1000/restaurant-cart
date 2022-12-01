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
    <div className="d-flex custom-shadow mt-2" style={{ padding: "0px 20px" }}>
      <div className="image ">
        <img
          className="rounded"
          src={image}
          style={{ width: "100px", height: "100px" }}
        />
      </div>
      <div className="flex-grow-1 d-flex flex-column m-3">
        <div className=" d-flex align-items-left">
          <Link to={`/dashboard/menu/item/${id}`}>
            <h5 className="text-overflow">{name} </h5>
          </Link>
        </div>
        <div className=" d-flex align-items-left ">
          <p
            style={{
              minWidth: "200px",
              maxWidth: "300px",
            }}
            className="text-overflow"
          >
            {description}
          </p>
        </div>
      </div>
      <div className="actions d-flex flex-column justify-content-center">
        <Quanity />
        <button className="btn btn-primary">{price} +</button>
      </div>
    </div>
  );
}
