import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import DashBoard from "./components/Dashboard.jsx";
import store from "./store/ReduxStore.js";
import AddTask from "./components/AddTask.jsx";
import ViewTask from "./components/ViewTask.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: [<App />],
    children: [
      { path: "/", element: [<DashBoard />] },
      { path: "/addTask", element: [<AddTask />] },
      { path: "/viewTask/:id", element: [<ViewTask />] },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
