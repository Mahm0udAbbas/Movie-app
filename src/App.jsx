import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import store from "./Store/store";
import Fav from "./components/Favorites";
import Movies from "./components/movies/Movies";
import NotFound from "./components/NotFound";
import PageLayout from "./components/PageLayout";
import Register from "./components/register";
import { LangProvider } from "./contexts/language";
import Login from "./components/LoginForm";
import Details from "./components/Details";
const routes = createBrowserRouter([
  {
    index: "/",
    element: <PageLayout />,
    children: [
      { index: "/", element: <Movies /> },
      { path: "movies", element: <Movies /> },
      { path: "favorites", element: <Fav /> },
      { path: "details/:id", element: <Details /> },
    ],
  },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "*", element: <NotFound /> },
]);

function App() {
  const [lang, setLang] = useState("en");
  return (
    <LangProvider value={{ lang, setLang }}>
      <Provider store={store}>
        <RouterProvider router={routes} />;
      </Provider>
    </LangProvider>
  );
}

export default App;
