import { Routes, Route } from "react-router-dom";
import { Navbar } from "../../components";
import Menu from "./menu/Menu";
import Item from "./item/Item";
export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/item/:id" element={<Item />} />
      </Routes>
      <></>
    </div>
  );
}
