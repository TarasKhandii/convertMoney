import React from "react";
import { Route, Routes } from "react-router-dom";
import ChartsPage from "../pages/chartsPage";
import ComparisonPage from "../pages/comparisonPage";
import ConvertPage from "../pages/convertPage";
import HistoricalPage from "../pages/historicalPage";
import HistoryPage from "../pages/historyPage";

const NavRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<ConvertPage />} />
      <Route path="/historical" element={<HistoricalPage />} />
      <Route path="/comparison" element={<ComparisonPage />} />
      <Route path="/charts" element={<ChartsPage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  );
};
export default NavRouters;
