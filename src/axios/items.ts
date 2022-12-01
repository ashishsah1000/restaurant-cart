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
      console.log(response);
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
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
      console.log(response);
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      return { status: 400, text: "some error happened" };
    })
    .finally(function () {
      // always executed
    });
}