import { Routes, Route } from "react-router-dom";
import { Navbar } from "../../components";
import Menu from "./menu/Menu";
import Item from "./item/Item";
import Create from "./createItem/Create";
export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/create" element={<Create />} />

        <Route path="/menu/item/:id" element={<Item />} />
        <Route path="/*" element={<Menu />} />
      </Routes>
      <></>
    </div>
  );
}
