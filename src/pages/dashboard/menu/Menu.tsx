import { getAllItems } from "../../../axios/items";
import { useEffect, useState } from "react";
import { FoodItem, menu } from "../../../interface";
import { Loading, MenuTable } from "../../../components";

export default function Menu() {
  const demo = [
    {
      id: 1,
      name: "Dish 1",
      description:
        "Fusce 11 tincidunt maximus leo, sed scelerisque massa auctor sit amet. Donec ex mauris, hendrerit quis nibh ac, efficitur fringilla enim.",
      specialTag: "Top Rated",
      category: "Appetizer",
      price: 14.99,
      image:
        "https://dotnetmasteryimages.blob.core.windows.net/redmango/springroll.jpg",
    },
    {
      id: 2,
      name: "Smoothi1e",
      description: "Taskty Smoothie1",
      specialTag: "Best Selle1r",
      category: "Appetizer1",
      price: 10,
      image:
        "https://dotnetmasteryimages.blob.core.windows.net/redmango/samosa.jpg",
    },
    {
      id: 3,
      name: "Spinach Love",
      description: "Something to love with spinach",
      specialTag: "best seller",
      category: "Appetizer",
      price: 9.99,
      image:
        "https://dotnetmasteryimages.blob.core.windows.net/redmango/SpinachLove.jpg",
    },
    {
      id: 4,
      name: "Veggie Platter",
      description: "Something to love with hummus",
      specialTag: "",
      category: "Appetizer",
      price: 13.99,
      image:
        "https://dotnetmasteryimages.blob.core.windows.net/redmango/veggiePlatter.jpg",
    },
  ];
  const [data, setdata] = useState<menu[]>([]);
  const requestAllItems = async () => {
    var res = await getAllItems();
    if (res.status == 200) {
      console.log(res);
    } else {
      console.log("some error happened", res);
    }
  };
  useEffect(() => {
    requestAllItems();
  }, []);
  return (
    <div>
      {data.length > 0 ? (
        <>
          <Loading />{" "}
        </>
      ) : (
        <>
          <div className="" style={{ maxWidth: "800px", margin: "0px auto" }}>
            {demo.map((x: FoodItem) => {
              return (
                <MenuTable
                  key={x.id}
                  name={x.name}
                  description={x.description}
                  id={x.id}
                  image={x.image}
                  price={x.price}
                  category={x.category}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
