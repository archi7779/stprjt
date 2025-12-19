import { Routes, Route, Outlet } from "react-router-dom";
import InfoComponent from "./components/InfoComponent";
const WorkSpaceApp = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            WOrkSpaceLAYOUT
            <Outlet />
          </div>
        }
      >
        <Route path="info" element={<InfoComponent />} />
      </Route>
    </Routes>
  );
};
export default WorkSpaceApp;
