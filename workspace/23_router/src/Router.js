import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/404";
import User from "./pages/User";
import UserDetail from "./pages/UserDetail";
import Redirect from "./pages/Redirect";
import Comment from "./pages/Comment";
const RouterData = createBrowserRouter([
  //객체배열형태로 라우터를 여러개 생성할 수 있음
  {
    // 메인경로
    path: "/",
    element: <App />,
    children: [
      //배열안엔 무조건객체!
      {
        path: "", //Home을 메인으로 설정. 메인을 가지고 있는 path는 반드시 필요함.
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "redirect",
        element: <Redirect />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "/user",
    element: <App />,
    children: [
      {
        path: "",
        element: <User />,
      },
      {
        path: ":userId",
        element: <UserDetail />,
        children: [
          {
            path: "comment",
            element: <Comment />,
          },
        ],
      },
    ],
  },
]);

export default RouterData;
