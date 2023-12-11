import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard";

import "./index.css";
import Stocks from "./components/Stocks/Stocks";
import Myorder from "./components/Myorder/Myorder";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="stocks" element={<Stocks />} />
        <Route path="orders" element={<Myorder />} />
      </Route>
    </>
  )
);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
