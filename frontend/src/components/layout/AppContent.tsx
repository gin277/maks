import React from "react";
import { Route, Routes } from "react-router-dom";
import { RouteType } from "../../types/route";
import { routes } from "../../routes/route";

const AppContent = () => {
  return (
    <Routes>
      {routes.map((route: RouteType, idx: number) => {
        return (
          route.element && (
            <Route key={idx} path={route.path} element={<route.element />} />
          )
        );
      })}
    </Routes>
  );
};

export default React.memo(AppContent);
