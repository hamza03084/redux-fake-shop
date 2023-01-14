import "./App.css";
import Header from "./containers/Header";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route
            path="/product/:productId"
            exact
            element={<ProductDetails />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
