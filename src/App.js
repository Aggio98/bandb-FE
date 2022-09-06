import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage, DetailsPage, ShopPage } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/details/:id" element={<DetailsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
