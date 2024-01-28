import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./components/layout/DefaultLayout";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
};
