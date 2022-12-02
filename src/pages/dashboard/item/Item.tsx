import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemDetails } from "../../../axios/items";
import { Loading, Quanity } from "../../../components";
import { FoodItem } from "../../../interface";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedItem } from "../../../features/item/itemSlice";
export default function Item() {
  const dispatch = useDispatch();
  // get id from url
  const { id } = useParams();
  // data regarding the food item
  const [data, setdata] = useState<FoodItem>({});
  const fetchItemDetails = async () => {
    const res: any = await getItemDetails(id);
    if (res.status == 200) {
      console.log(res);
      setdata(res.data.result);
    } else {
      console.log("some error happened", res);
    }
  };
  useEffect(() => {
    console.log("the id of the page", id);
    fetchItemDetails();
  }, []);
  return (
    <div className="containter">
      {data.name == undefined ? (
        <>
          <div className="d-flex justify-content-center mt-3">
            <Loading />
          </div>
        </>
      ) : (
        <>
          <div
            className="mt-3 rounded custom-shadow"
            style={{
              maxWidth: "500px",
              margin: "0px auto",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "200px",
                overflow: "hidden",
                background: `url(${data.image})`,
                backgroundSize: "cover",
              }}
            >
              <div className="item-action d-flex justify-content-end">
                <Link to={`/dashboard/edit/${id}`}>
                  <button
                    role={"button"}
                    className="btn m-2 btn-outlined"
                    onClick={() => {
                      dispatch(selectedItem(data));
                    }}
                  >
                    Update
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-3">
              <div className="mt-3">
                <h3
                  className="text-uppercase text-warning"
                  style={{ fontWeight: "200" }}
                >
                  {data.name}
                </h3>
              </div>
              <div className="mt-3">
                <p>{data.description}</p>
              </div>
              <div className="d-flex ">
                <div className="flex-grow-1 d-flex ">
                  <h5 className=" m-2" style={{ fontWeight: "200" }}>
                    Quantity
                  </h5>
                </div>
                <Quanity />
              </div>
              <div className="mt-3 d-flex justify-content-between">
                <button className="btn  m-1 mt-2">${data.price}</button>
                <button className="btn btn-primary">
                  <b>+ Add to cart</b>{" "}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
