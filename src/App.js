import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard";

import "./index.css";
import Admission from "./components/Admission/admission";
import Students from "./components/Students/students";
import Notice from "./components/Notice/notice";
import Fee from "./components/Fee/fee";
import Login from "./login/login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="admission" element={<Admission />} />
        <Route path="student" element={<Students />} />
        <Route path="notice" element={<Notice />} />
        <Route path="fee" element={<Fee />} />
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
