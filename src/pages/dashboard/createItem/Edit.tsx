import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../../components";
import { FoodItem } from "../../../interface";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, updateItem } from "../../../axios/items";
import { useNavigate } from "react-router-dom";

export default function Edit() {
  // this element is taking data from redux for the selected element that has to be edited
  // so that we do not end up again and again requesting the server
  const navigate = useNavigate();
  const { id } = useParams();
  const [food, setFood] = useState<FoodItem>({
    name: "",
    description: "",
    specialTag: "",
    price: 0,
    image: "",
  });

  //   handle delete
  const handleDelete = async () => {
    var res = await deleteItem(food.id!);
    if (res.status == 200) {
      console.log("Deleted the item");
      navigate("/dashboard");
    } else {
      console.log("some error", res);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    var form: any = document.querySelector(".addItem");
    const data: any = Object.fromEntries(new FormData(form).entries());
    const item: FoodItem = {
      id: food.id,
      name: data.name,
      description: data.description,
      specialTag: data.specialTags,
      category: data.category,
      price: data.price,
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/vegetable-pakora-recipe.jpg",
    };
    console.log(item);
    var res = await updateItem(item);
    if (res.status == 200) {
      console.log("successfully added redirect should happen");
      navigate("/dashboard");
    } else {
      console.log("some error", res);
    }
  };

  // get data from redux about the selected item
  const foodItem = useSelector((state: any) => state.item.selectedItem);
  useEffect(() => {
    setFood(foodItem);
  }, []);
  console.log("this is the Id that we are reciving", foodItem);
  return (
    <div
      className="p-3 mt-3 custom-shadow"
      style={{ width: "600px", margin: "0px auto" }}
    >
      <div>
        {" "}
        <button
          onClick={() => {
            handleDelete();
          }}
          className="m-2 btn btn-danger mt-3"
        >
          Delete
        </button>
      </div>
      {food.name == "" ? (
        <div className="d-flex justify-content-center">
          <Loading />
        </div>
      ) : (
        <form className="addItem" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group mt-3">
            <label>Name of the Dish</label>
            <input
              defaultValue={food.name}
              name="name"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Name of the dish"
            />
          </div>
          <div className="form-group mt-3">
            <label>Description</label>
            <input
              defaultValue={food.description}
              name="description"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Description"
            />
          </div>
          <div className="form-group mt-3">
            <label>Special Tags</label>
            <input
              defaultValue={food.specialTag}
              name="specialTags"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Special Tags"
            />
          </div>
          <div className="form-group mt-3">
            <label>Category</label>
            <input
              defaultValue={food.category}
              name="category"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="category"
            />
          </div>
          <div className="form-group mt-3">
            <label>Price</label>
            <input
              defaultValue={food.price}
              name="price"
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Price"
            />
          </div>
          <div className="form-group mt-3">
            <label>Upload Image</label>
            <input
              name="file"
              type="file"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Price"
            />
          </div>
          <div className="d-flex justify-content-end ">
            <button type="submit" className="m-2 btn btn-success mt-3">
              Update
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
