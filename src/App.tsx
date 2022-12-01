import { Dashboard } from "./pages";
import "./App.css";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* login and register */}
      {/* protected links */}
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
