import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n";
import App from "./Components/App/App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import { Provider } from "react-redux";
import store from './store/store'
import {
  Dashboard,
  Home,
  LoginPage,
  PrivateRoute,
  Signup,
  MapPage,
  Task
} from "./Pages";
import ReduxComponent from "./Components/ReduxComponent/ReduxComponent";
import ReduxComp2 from "./Components/ReduxComponent/ReduxComp2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/map",
    element: <MapPage />,
  },
  {
    path: "/task",
    element: <Task />,
  },
  {
    path: "/redux",
    element: <div><ReduxComponent /><ReduxComp2/></div>,
  },
]);

if (localStorage.getItem("i18nextLng") === null) {
  localStorage.setItem("i18nextLng", "en");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
