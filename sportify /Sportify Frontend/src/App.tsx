import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Dashboard from './pages/Dashboard.tsx';
import Register from './pages/Register.tsx';
import Login from './pages/Login.tsx';
import MyAccount from './pages/MyAccount.tsx';
import EditProfile from './pages/EditProfile.tsx';
import Changepassword from './pages/Changepassword.tsx';
import Myorders from './pages/Myorders.tsx';
import Customercare from "./pages/Customercare.tsx";
import Checkout from "./pages/Checkout.tsx";
import  Products from "./pages/Products.tsx";
import  AddProduct from "./pages/AddProduct.tsx";
import ViewCategory from "./pages/ViewCategory.tsx";
import AddCategory from "./pages/AddCategory.tsx";
import ViewBrand from "./pages/ViewBrand.tsx";
import AddBrand from "./pages/AddBrand.tsx";
import TotalOrders from "./pages/TotalOrders.tsx";
import Users from "./pages/Users.tsx";
import AdminProfile from "./pages/AdminProfile.tsx";
import AdminEditProfile from "./pages/AdminEditProfile.tsx";
import AdminChangePassword from "./pages/AdminChangePassword.tsx";
import WishList from "./pages/WishList.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Cart from "./pages/Cart.tsx";
import AssignDelivery from "./pages/AssignDelivery.tsx";
import Brands from "./pages/Brands.tsx";
import Category from "./pages/Category.tsx";


const router=createBrowserRouter([
    {path:"/",element:<Home />},
    {path:"/login",element:<Login />},
    {path:"/register",element:<Register />},
    {path:"/dashboard",element:<Dashboard />},
    {path:"/myaccount",element:<MyAccount />},
    {path:"/editprofile",element:<EditProfile />},
    {path:"/changepassword",element:<Changepassword />},
    {path:"/myorders",element:<Myorders />},
    {path:"/checkout",element:<Checkout />},
    {path:"/admin/products",element:<Products />},
    {path:"/admin/addproduct",element:<AddProduct />},
    {path:"/admin/viewcategory",element:<ViewCategory />},
    {path:"/admin/addcategory",element:<AddCategory />},
    {path:"/admin/viewbrand",element:<ViewBrand />},
    {path:"/admin/addbrand",element:<AddBrand />},
    {path:"/admin/totalorders",element:<TotalOrders />},
    {path:"/admin/users",element:<Users />},
    {path:"/admin/profile",element:<AdminProfile />},
    {path:"/admin/editprofile",element:<AdminEditProfile />},
    {path:"/admin/changepassword",element:<AdminChangePassword />},
    {path:"/wishlist",element:<WishList />},
    {path:"/admin/addproduct/:id_p",element:<AddProduct />},
    {path:"/admin/addcategory/:id_p",element:<AddCategory />},
     {path:"/admin/addbrand/:id_p",element:<AddBrand />},
    {path:"/products/:id_p",element:<Checkout />},
    {path:"/cart",element:<Cart />},
     {path:"/brands/:brandName",element:<Brands />},
    {path:"/categories/:categoryName",element:<Category />},
    {path:"/admin/assigndelivery",element:<AssignDelivery/>},
])

const queryClient= new QueryClient();
function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router}/>
            </QueryClientProvider>
        </>
    )
}
export default App

