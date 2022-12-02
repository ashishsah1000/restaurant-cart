import axios from "axios";
import { FoodItem } from "../interface";
const url = "https://redmangov1.azurewebsites.net/api/";

// get all the list of the food items
export function getAllItems() {
  const req = url + "MenuItem";
  return axios
    .get(req)
    .then(function (response) {
      // handle success
      // console.log(response);
      return response;
    })
    .catch(function (error) {
      // handle error
      // console.log(error);
      return { status: 400, text: "some error happened" };
    })
    .finally(function () {
      // always executed
    });
}

// get details of the specific item

export function getItemDetails(id: any) {
  const req = url + "MenuItem/" + id;
  return axios
    .get(req)
    .then(function (response) {
      // handle success
      // console.log(response);
      return response;
    })
    .catch(function (error) {
      // handle error
      // console.log(error);
      return { status: 400, text: "some error happened" };
    })
    .finally(function () {
      // always executed
    });
}

// post a specific item
export function addItem(data: FoodItem) {
  const req = url + "MenuItem";
  return axios
    .post(req, { ...data }, { headers: { "Content-Type": "application/json" } })
    .then(function (response) {
      // console.log(response);
      return response;
    })
    .catch(function (error) {
      // console.log(error);
      return { status: 400, text: "failed to add the item " };
    });
}
// post a specific item
export function updateItem(data: FoodItem) {
  const req = url + "MenuItem/" + data.id;
  return axios
    .put(req, { ...data }, { headers: { "Content-Type": "application/json" } })
    .then(function (response) {
      // console.log(response);
      return response;
    })
    .catch(function (error) {
      // console.log(error);
      return { status: 400, text: "failed to add the item " };
    });
}
// delete a specific item
export function deleteItem(id: number) {
  const req = url + "MenuItem/" + id;
  return axios
    .delete(req)
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return { status: 400, text: "failed to add the item " };
    });
}
