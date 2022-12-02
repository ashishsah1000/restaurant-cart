import { useNavigate } from "react-router-dom";
import { addItem } from "../../../axios/items";
import { FoodItem } from "../../../interface";

export default function Create() {
  // handle the submit button
  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    var form: any = document.querySelector(".addItem");
    const data: any = Object.fromEntries(new FormData(form).entries());
    const item: FoodItem = {
      id: 0,
      name: data.name,
      description: data.description,
      specialTag: data.specialTags,
      category: data.category,
      price: data.price,
      image:
        "https://carameltintedlife.com/wp-content/uploads/2021/07/Chicken-Dum-Biryani-1-3-500x375.jpg",
    };
    var res = await addItem(item);
    if (res.status == 201) {
      console.log("successfully added redirect should happen");
      navigate("/dashboard");
    } else {
      console.log("some error", res);
    }
  };
  return (
    <div
      className="p-3 mt-3 custom-shadow"
      style={{ width: "600px", margin: "0px auto" }}
    >
      <form className="addItem" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group mt-3">
          <label>Name of the Dish</label>
          <input
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
        <div className="d-flex justify-content-end "></div>
        <button type="submit" className="btn btn-success mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}
