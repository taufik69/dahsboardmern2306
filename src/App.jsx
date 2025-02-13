import Banner from "./components/banner/Banner";
import BestSelling from "./components/BestSellling/BestSelling";
import Category from "./components/Category/Category";
import Contact from "./components/Contact/Contact";
import FlashSale from "./components/FlashSale/FlashSale";
import Order from "./components/Order/Order";
import ProductList from "./components/ProductList/ProductList";
import Product from "./components/Products/Product";
import Signin from "./components/SignIn/Signin";
import SignUp from "./components/Signup/SignUp";
import SingleOrder from "./components/SingleOrder/SingleOrder";
import Subcategory from "./components/Subcategory/Subcategory";
import Home from "./pages/Home";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}>
        <Route path="/banner" element={<Banner />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/subcategory" element={<Subcategory />}></Route>
        <Route path="/flashsale" element={<FlashSale />}></Route>
        <Route path="/bestSelling" element={<BestSelling />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/productslist" element={<ProductList />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/order/:id" element={<SingleOrder />}></Route>
      </Route>
      <Route path="/signup" element={<SignUp />}></Route>

      <Route path="/signin" element={<Signin />}></Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
