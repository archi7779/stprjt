import { RouterProvider } from "react-router-dom";
import { router } from "@app/routers";

export const App = () => {
  return <RouterProvider router={router} />;
};
