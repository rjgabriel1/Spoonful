import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Create from "./pages/Create";
import Home from "./pages/Home";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<NotFound/>}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="profile" element={<Profile />} />
      <Route path="/auth" element={<AuthLayout />}>
        <Route index path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
