import { Route, Routes } from "react-router-dom";
import { HomePage, DetailsPage, ShopPage, Login, Register } from "./pages";
import { NavBar, Banner } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/details/:id" element={<DetailsPage />}></Route>
        <Route path="/account/register" element={<Register />}></Route>
        <Route path="/account/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
