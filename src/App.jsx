import { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./router";
import ProtectedRoutes from "./ProtectedRoutes";
import UnAuthorized from "./screens/UnAuthorized";

function App() {
  const { isLogged, userRole } = useSelector((state) => state.appReducer);

  return (
    <>
      <h2>You Are log in as {userRole} </h2>
      <BrowserRouter>
        <Routes>
          <Route path="/unauthorized" element={<UnAuthorized />} />
          {routes.map((e, i) => {
            return (
              <Route
                path={e.path}
                key={i}
                element={
                  <ProtectedRoutes
                    children={e?.element}
                    isProtected={e?.protected}
                    allowedRoles={e?.role}
                  />
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
