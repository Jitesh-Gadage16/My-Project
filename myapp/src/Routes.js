import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddCategory from "./admin/AddCategory";
import AdminRoutes from "./auth/helper/AdminRoutes";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import Home from "./core/Home";
import AdminDashBoard from "./user/AdminDashBoard";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import UserDashBoard from "./user/UserDashBoard";
import ManageCategory from './admin/ManageCategory'
import AddProduct from './admin/AddProduct'
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import Products from "./core/Products";
import Cart from "./core/Cart";
import Wishlist from './core/Wishlist'









const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Signup" exact component={Signup} />
        <Route path="/Signin" exact component={Signin} />
        <Route path="/Products" exact component={Products} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/wishlist" exact component={Wishlist} />
        <PrivateRoutes path="/user/dashboard" exact component={UserDashBoard}/>
        <AdminRoutes  path="/admin/dashboard" exact component={AdminDashBoard}/>
        <AdminRoutes  path="/admin/create/category" exact component={AddCategory}/>
        <AdminRoutes  path="/admin/category" exact component={ManageCategory}/>
        <AdminRoutes  path="/admin/create/product" exact component={AddProduct}/>
        <AdminRoutes  path="/admin/products" exact component={ManageProducts}/>
        <AdminRoutes  path="/admin/product/update/:productId" exact component={UpdateProduct}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
