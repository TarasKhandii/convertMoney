import React from "react";
import { Route, Routes } from "react-router-dom";
import ChartsPage from "../pages/chartsPage";
import ComparisonPage from "../pages/comparisonPage";
import ConvertPage from "../pages/convertPage";
import HistoricalPage from "../pages/historicalPage";
import HistoryPage from "../pages/historyPage";
import { ROUTES } from "./routerTypes";

const NavRouters = () => {
  return (
    <Routes>
      <Route path={ROUTES.convertPage} element={<ConvertPage />} />
      <Route path={ROUTES.historicalPage} element={<HistoricalPage />} />
      <Route path={ROUTES.comparisonPage} element={<ComparisonPage />} />
      <Route path={ROUTES.chartsPage} element={<ChartsPage />} />
      <Route path={ROUTES.historyPage} element={<HistoryPage />} />
    </Routes>
  );
};
export default NavRouters;
