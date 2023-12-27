import Admin from "./screens/Admin";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Products from "./screens/Products";
import SuperAdmin from "./screens/SuperAdmin";
import UpdateProducts from "./screens/UpdateProducts";

const routes = [
  {
    path: "/login",
    element: <Login />,
    protected: false,
    role: ["public", "admin", "superAdmin"],
  },
  {
    path: "/",
    element: <Home />,
    protected: true,
    role: ["public", "admin", "superAdmin"],
  },
  {
    path: "/admin",
    element: <Admin />,
    protected: true,
    role: ["admin", "superAdmin"],
  },
  {
    path: "/super-admin",
    element: <SuperAdmin />,
    protected: true,
    role: ["superAdmin"],
  },
  {
    path: "/products",
    element: <Products />,
    protected: true,
    role: ["public", "admin", "superAdmin"],
  },
  {
    path: "/update-products",
    element: <UpdateProducts />,
    protected: true,
    role: ["superAdmin", "admin"],
  },
];

export { routes };
